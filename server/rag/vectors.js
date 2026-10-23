export function validVector(vector, dimensions) {
  return Array.isArray(vector) && vector.length === dimensions && vector.every(Number.isFinite) && vector.some(value => value !== 0);
}
export function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]; normA += a[i] * a[i]; normB += b[i] * b[i];
  }
  return Math.max(-1, Math.min(1, dot / Math.sqrt(normA * normB)));
}
