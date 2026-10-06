function normalize(value, preserveLineBreaks = false) {
  if (typeof value !== 'string') return '';
  const text = value.toLowerCase().replace(/[()[\]{}]/g, '');
  return preserveLineBreaks ? text.trim() : text.replace(/\s+/g, '').trim();
}

// Only explicitly declared multi-part answers ignore these separators.
// Operators, punctuation and line breaks in code/SQL answers stay significant.
function normalizeParts(value) {
  return normalize(value).replace(/[,;/'"，、；→]/g, '');
}

function matchesParts(question, userAnswer) {
  const input = normalizeParts(userAnswer);
  if (!input) return false;
  const parts = question.answerParts.map(aliases => [...new Set(aliases.map(normalizeParts).filter(Boolean))]);
  const unordered = question.answerOrder === 'unordered';
  const failed = new Set();
  function consume(offset, remaining) {
    if (!remaining.length) return offset === input.length;
    const key = `${offset}:${remaining.join(',')}`;
    if (failed.has(key)) return false;
    for (const index of unordered ? remaining : [remaining[0]]) {
      for (const alias of parts[index]) {
        if (input.startsWith(alias, offset) && consume(offset + alias.length, remaining.filter(i => i !== index))) return true;
      }
    }
    failed.add(key);
    return false;
  }
  return consume(0, parts.map((_, index) => index));
}

export function matchesPstAnswer(question, userAnswer) {
  if (question.answerParts?.length) return matchesParts(question, userAnswer);
  const accepted = [question.answer, question.alt, ...(question.alts || [])].filter(value => typeof value === 'string' && value.trim());
  const preserveLineBreaks = accepted.some(value => value.includes('\n'));
  const input = normalize(userAnswer, preserveLineBreaks);
  return Boolean(input) && accepted.some(value => input === normalize(value, preserveLineBreaks));
}
