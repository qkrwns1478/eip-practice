import { requestExplanation } from './quizExplanation.js';

export function currentAnswer(quiz) {
  const items = quiz.currentQuestion?.subItems;
  return items?.length
    ? { subAnswers: items.map(item => ({ userAnswer: item.userAnswer || '', isCorrect: item.isCorrect === true, answered: item.answered === true })) }
    : { userAnswer: quiz.userAnswer, isCorrect: quiz.isCorrect };
}

export function syncSavedAnswers(quiz) {
  const ids = new Set([...quiz.bookmarkedQuestions, ...quiz.wrongQuestions].map(String));
  for (const id of Object.keys(quiz.savedAnswers)) {
    if (!ids.has(id)) delete quiz.savedAnswers[id];
  }
  const question = quiz.currentQuestion;
  if (question && ids.has(String(question.id)) && (quiz.answered || question.subItems?.some(item => item.answered))) {
    const answer = currentAnswer(quiz);
    const previous = quiz.savedAnswers[question.id];
    if (previous && JSON.stringify(previous) !== JSON.stringify(answer)) delete quiz.savedExplanations[question.id];
    quiz.savedAnswers[question.id] = answer;
  }
  return { ...quiz.savedAnswers };
}

export function answerLabel(answer) {
  if (!answer) return '기록 없음';
  if (answer.subAnswers) return answer.subAnswers.map((item, index) => `${index + 1}번: ${item.answered === false ? '미응답' : item.userAnswer || '미응답'}`).join(' / ');
  return answer.userAnswer || '미응답';
}

// Fences longer than any backtick run preserve code and submitted answers verbatim.
function block(value) {
  const text = String(value ?? '');
  const size = Math.max(3, ...[...text.matchAll(/`+/g)].map(match => match[0].length + 1));
  const fence = '`'.repeat(size);
  return `${fence}\n${text}\n${fence}`;
}

export function notesMarkdown(title, questions, answers, explanations, childrenFor = () => [], infoFor = () => '') {
  const sections = questions.map((question, index) => {
    const answer = answers[question.id];
    const lines = [`## ${index + 1}. 문제`, infoFor(question.id), question.question || question.desc || question.keyword];
    if (question.passageOrCode) lines.push(block(question.passageOrCode));
    const image = question.imageUrl || question.image;
    if (image) lines.push(`![문제 이미지](${new URL(image, window.location.origin).href})`);
    if (question.options?.length) {
      const options = question.options.map(option => {
        const text = String(option).replace(/([\\`*_{}\[\]<>])/g, '\\$1').replace(/\r?\n/g, '\n  ');
        return `- ${text}`;
      });
      lines.push('### 보기', options.join('\n'));
    }
    const children = childrenFor(question.id);
    if (children.length) {
      children.forEach((child, i) => {
        const submitted = answer?.subAnswers?.[i];
        lines.push(`### 문항 ${i + 1}`, child.desc, '**정답**', block(child.keyword), '**내 답안**',
          block(!submitted ? '기록 없음' : submitted.answered === false ? '미응답' : submitted.userAnswer || '미응답'));
      });
    } else {
      lines.push('### 정답', block(question.answer || question.keyword), '### 내 답안', block(answerLabel(answer)));
    }
    lines.push('### 해설', explanations[question.id]?.text || '해설 없음');
    return lines.filter(Boolean).join('\n\n');
  });
  return `# ${title}\n\n${sections.join('\n\n---\n\n')}\n`;
}

function downloadMarkdown(filename, markdown) {
  const url = URL.createObjectURL(new Blob(['\uFEFF', markdown], { type: 'text/markdown;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export const quizNotesMixin = {
  data() { return { savedAnswers: {}, notesExporting: false, notesExportStatus: '' }; },
  methods: {
    async exportNotes(type, generate) {
      if (this.notesExporting) return;
      this.notesExporting = true;
      this.notesExportStatus = 'MD 파일을 준비하고 있습니다.';
      try {
        this.saveProgress();
        const ids = [...(type === 'bookmarks' ? this.bookmarkedQuestions : this.wrongQuestions)];
        const questions = ids.map(id => this.getQuestionById(id)).filter(Boolean);
        if (!questions.length) return;
        const answers = JSON.parse(JSON.stringify(this.savedAnswers));
        const explanations = { ...this.savedExplanations };
        const childrenFor = id => this.geoData?.filter(row => row.parentId === id) || [];
        const missing = questions.filter(question => !explanations[question.id]?.text);
        let failures = 0;
        if (generate) {
          for (const [index, question] of missing.entries()) {
            this.notesExportStatus = `해설 생성 중 (${index + 1}/${missing.length})`;
            const children = childrenFor(question.id);
            const saved = answers[question.id];
            const input = children.length ? { subAnswers: children.map((_, i) => ({
              userAnswer: saved?.subAnswers?.[i]?.answered === false ? '' : saved?.subAnswers?.[i]?.userAnswer || '',
              isCorrect: saved?.subAnswers?.[i]?.isCorrect === true,
            })) } : { userAnswer: saved?.userAnswer || '', isCorrect: saved?.isCorrect === true };
            try {
              const text = await requestExplanation(this.storagePrefix, question.id, input);
              const explanation = { text, context: JSON.stringify(input) };
              explanations[question.id] = explanation;
              if ([...this.bookmarkedQuestions, ...this.wrongQuestions].includes(question.id) &&
                JSON.stringify(this.savedAnswers[question.id]) === JSON.stringify(answers[question.id])) {
                this.savedExplanations[question.id] = explanation;
                this.saveProgress();
              }
            } catch { failures++; }
          }
        }
        const title = type === 'bookmarks' ? '핵심정리' : '오답노트';
        const label = { pstQuiz: '기출문제', geoQuiz: '개념문제', keywordQuiz: '키워드문제' }[this.storagePrefix] || '문제';
        downloadMarkdown(`${label}_${title}.md`, notesMarkdown(title, questions, answers, explanations, childrenFor, id => this.getQuizInfo?.(id) || ''));
        if (failures) this.showAlert('일부 해설 생성 실패', `${failures}개 문제의 해설을 생성하지 못해 해설 없이 저장했습니다. 생성된 해설은 문제에 저장되었습니다. 다시 MD 저장을 누르면 누락된 해설을 생성할 수 있습니다.`);
      } catch (error) {
        this.showAlert('MD 저장 실패', error.message || '파일을 저장하지 못했습니다. 다시 시도해주세요.');
      } finally {
        this.notesExporting = false;
        this.notesExportStatus = '';
      }
    },
  },
};
