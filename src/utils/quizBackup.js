import { sanitizeRelatedQuestions, syncSavedExplanations } from "./quizExplanation.js";
import { syncSavedAnswers } from "./quizNotes.js";

const listField = (type) => (type === "bookmarks" ? "bookmarkedQuestions" : "wrongQuestions");

export function createQuizBackup(quiz, type) {
  const field = listField(type);
  const answers = syncSavedAnswers(quiz);
  const explanations = syncSavedExplanations(quiz);
  const ids = quiz[field];
  const pick = (source) => Object.fromEntries(ids.filter((id) => source[id]).map((id) => [id, source[id]]));
  return {
    version: 1,
    quizType: quiz.storagePrefix,
    [field]: [...ids],
    savedAnswers: pick(answers),
    savedExplanations: pick(explanations),
  };
}

export function parseQuizBackup(value, quiz, type) {
  const field = listField(type);
  if (!value || value.version !== 1 || value.quizType !== quiz.storagePrefix || !Array.isArray(value[field])) {
    throw new Error("현재 퀴즈와 목록에서 내보낸 JSON 파일을 선택해주세요.");
  }
  const ids = [
    ...new Set(
      value[field].filter((id) => (typeof id === "number" || typeof id === "string") && quiz.getQuestionById(id)),
    ),
  ];
  const savedAnswers = {};
  const savedExplanations = {};
  const validAnswer = (answer) =>
    answer && typeof answer.userAnswer === "string" && typeof answer.isCorrect === "boolean";
  for (const id of ids) {
    const answer = value.savedAnswers?.[id];
    if (Array.isArray(answer?.subAnswers) && answer.subAnswers.every(validAnswer)) {
      savedAnswers[id] = {
        subAnswers: answer.subAnswers.map((item) => ({
          userAnswer: item.userAnswer,
          isCorrect: item.isCorrect,
          answered: item.answered !== false,
        })),
      };
    } else if (validAnswer(answer)) {
      savedAnswers[id] = { userAnswer: answer.userAnswer, isCorrect: answer.isCorrect };
    }
    const explanation = value.savedExplanations?.[id];
    if (typeof explanation?.text === "string" && explanation.text.trim() && typeof explanation.context === "string") {
      savedExplanations[id] = {
        text: explanation.text,
        context: explanation.context,
        relatedQuestions: sanitizeRelatedQuestions(explanation.relatedQuestions),
      };
    }
  }
  return { [field]: ids, savedAnswers, savedExplanations, skipped: value[field].length - ids.length };
}

export const quizBackupMixin = {
  data() {
    return { backupImporting: false };
  },
  methods: {
    exportSavedJson(type) {
      try {
        this.saveProgress();
        const backup = createQuizBackup(this, type);
        const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
        const link = document.createElement("a");
        link.href = url;
        link.download = `${this.storagePrefix}_${type}.json`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch {
        this.showAlert("JSON 내보내기 실패", "파일을 저장하지 못했습니다. 다시 시도해주세요.");
      }
    },
    async importSavedJson(type, file) {
      if (!file || this.backupImporting) return;
      this.backupImporting = true;
      try {
        const backup = parseQuizBackup(JSON.parse(await file.text()), this, type);
        this.saveProgress();
        const field = listField(type);
        const added = backup[field].filter((id) => !this[field].includes(id));
        this[field] = [...this[field], ...added];
        // Existing answers and their explanations remain paired when lists overlap.
        for (const id of backup[field]) {
          if (!this.savedAnswers[id] && !this.savedExplanations[id]) {
            if (backup.savedAnswers[id]) this.savedAnswers[id] = backup.savedAnswers[id];
            if (backup.savedExplanations[id]) this.savedExplanations[id] = backup.savedExplanations[id];
          }
        }
        this.saveProgress();
        this.showAlert(
          "JSON 불러오기 완료",
          `${added.length}개 문제를 추가했습니다. 기존 문제는 중복 추가하지 않습니다.${backup.skipped ? ` 중복되거나 현재 문제 목록에 없는 ${backup.skipped}개 항목은 제외했습니다.` : ""}`,
        );
      } catch (error) {
        this.showAlert(
          "JSON 불러오기 실패",
          error instanceof SyntaxError
            ? "올바른 JSON 파일이 아닙니다."
            : error.message || "파일을 불러오지 못했습니다.",
        );
      } finally {
        this.backupImporting = false;
      }
    },
  },
};
