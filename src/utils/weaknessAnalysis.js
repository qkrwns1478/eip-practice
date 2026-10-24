export const ANALYSIS_LIMIT = 30;

export function analysisInput(quizType, ids, savedAnswers) {
  return {
    quizType,
    totalWrongCount: ids.length,
    questions: ids.slice(-ANALYSIS_LIMIT).map((questionId) => ({
      questionId,
      answer: savedAnswers[questionId] || null,
    })),
  };
}
