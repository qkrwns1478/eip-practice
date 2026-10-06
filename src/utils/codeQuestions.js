export const codeLanguages = ['C', 'Java', 'Python', 'SQL'];

// Require source text: a question mentioning a language is not necessarily a code exercise.
export function getCodeLanguage(question) {
  const title = question?.question || '';
  const sqlSource = [question?.passageOrCode, ...(question?.options || [])].filter(Boolean).join('\n');
  // SQL exercises can provide a query in the options, an image, or ask for a query from conditions.
  const asksForSql = /\bSQL\b/i.test(title) || (/쿼리.*작성/.test(title) && /\bSQL\b/i.test(sqlSource));
  if (asksForSql && (sqlSource.trim() || question?.imageUrl)) return 'SQL';
  if (/\bSELECT\b[\s\S]+?\bFROM\b|\b(?:INSERT\s+INTO|DELETE\s+FROM|(?:CREATE|ALTER|DROP)\s+(?:TABLE|VIEW|INDEX|DOMAIN)|UPDATE\s+\S+\s+SET)\b/i.test(sqlSource)) return 'SQL';
  const code = question?.passageOrCode;
  if (!code?.trim()) return null;
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
