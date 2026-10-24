import { pstData } from "../assets/pstData.js";

const knownIds = new Set(pstData.map((question) => question.id));
const ids = (value) =>
  Array.isArray(value) ? [...new Set(value.filter((id) => Number.isInteger(id) && knownIds.has(id)))] : [];

export function recommendationInput(progress, currentQuestionId) {
  const wrong = ids(progress.wrongQuestions);
  const saved = progress.savedAnswers || {};
  return {
    wrongQuestions: wrong.filter((id) => saved[id]?.isCorrect !== true),
    bookmarkedQuestions: ids(progress.bookmarkedQuestions),
    solvedQuestions: ids([
      ...ids(progress.solvedQuestions),
      ...wrong,
      ...Object.keys(saved)
        .map(Number)
        .filter((id) => typeof saved[id]?.isCorrect === "boolean"),
    ]),
    excludeQuestionIds: ids([currentQuestionId]),
  };
}
