export const codeLanguages = ['C', 'Java', 'Python'];

// Require source text: a question mentioning a language is not necessarily a code exercise.
export function getCodeLanguage(question) {
  const code = question?.passageOrCode;
  if (!code?.trim()) return null;
  const title = question.question || '';
  if (/\bjava\b|자바/i.test(title)) return 'Java';
  if (/python|파이썬/i.test(title)) return 'Python';
  if (/C\s*(언어|코드)/i.test(title)) return 'C';
  if (/System\.out|\binterface\s+\w+|\bpublic\s+class\b/.test(code)) return 'Java';
  if (/#include\s*[<"]|\bprintf\s*\(|\bscanf\s*\(/.test(code)) return 'C';
  if (/^\s*(def\s+\w+\(|class\s+\w+.*:|print\s*\()/m.test(code)) return 'Python';
  return null;
}

export function getCodeQuestions(questions, language = 'all') {
  return questions.filter(question => {
    const detected = getCodeLanguage(question);
    return detected && (language === 'all' || detected === language);
  });
}
