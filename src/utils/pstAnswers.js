export function normalizePstAnswer(value, preserveLineBreaks = false) {
  const text = String(value ?? '').toLowerCase();
  return preserveLineBreaks
    ? text.trim().replace(/[()[\]{}]/g, '')
    : text.replace(/\s+/g, '').replace(/[()[\]{}]/g, '').trim();
}

export function gradePstAnswer(question, userAnswer) {
  const answers = [question.answer, question.alt, ...(question.alts || [])].filter(answer => typeof answer === 'string');
  const preserveLineBreaks = answers.some(answer => answer.includes('\n'));
  return answers.some(answer => normalizePstAnswer(userAnswer, preserveLineBreaks) === normalizePstAnswer(answer, preserveLineBreaks));
}

// Include the question content as well as accepted answers in explanation cache identity.
export function pstQuestionContext(question) {
  return JSON.stringify([question.question, question.passageOrCode, question.options,
    question.imageUrl || question.image, question.answer, question.alt, question.alts]);
}

export function regradeMockExam(session, exam) {
  if (!session || !exam) return;
  session.results = session.results && typeof session.results === 'object' && !Array.isArray(session.results) ? session.results : {};
  session.answers = session.answers && typeof session.answers === 'object' && !Array.isArray(session.answers) ? session.answers : {};
  const current = exam.questions[session.currentQuestionIndex];
  if (current && session.answered === true && typeof session.userAnswer === 'string') {
    session.answers[current.id] = session.userAnswer;
    session.isCorrect = gradePstAnswer(current, session.userAnswer);
  }
  for (const question of exam.questions) {
    if (typeof session.answers[question.id] === 'string') {
      session.results[question.id] = gradePstAnswer(question, session.answers[question.id]);
    }
  }
}

export function reconcilePstAnswers(quiz) {
  const current = quiz.getQuestionById(quiz.currentQuestion?.id);
  if (current) quiz.currentQuestion = current;
  if (current && quiz.answered) quiz.isCorrect = gradePstAnswer(current, quiz.userAnswer);
  for (const session of Object.values(quiz.practiceSessions)) {
    const question = quiz.getQuestionById(session?.currentQuestionId);
    if (question && session.answered && typeof session.userAnswer === 'string') {
      session.isCorrect = gradePstAnswer(question, session.userAnswer);
    }
  }
  for (const [id, answer] of Object.entries(quiz.savedAnswers)) {
    const question = quiz.getQuestionById(Number(id));
    if (question && typeof answer?.userAnswer === 'string') answer.isCorrect = gradePstAnswer(question, answer.userAnswer);
  }
  for (const [id, explanation] of Object.entries(quiz.savedExplanations)) {
    const question = quiz.getQuestionById(Number(id));
    let context;
    try { context = JSON.parse(explanation.context); } catch { /* Discard legacy or invalid cache entries. */ }
    const answer = quiz.savedAnswers[id];
    if (!question || context?.questionContext !== pstQuestionContext(question) ||
      (answer && (context.userAnswer !== answer.userAnswer || context.isCorrect !== answer.isCorrect))) {
      delete quiz.savedExplanations[id];
    }
  }
  for (const [key, session] of Object.entries(quiz.mockExamSessions)) {
    regradeMockExam(session, quiz.pstExams.find(exam => exam.key === key));
  }
}
