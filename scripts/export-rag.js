// Export the existing JS dataset and hashes without duplicating its normalization in Python.
import { questionCatalog, DOCUMENT_VERSION } from '../server/rag/questions.js';

process.stdout.write(JSON.stringify({
  documentVersion: DOCUMENT_VERSION,
  records: [...questionCatalog.records.values()].map(row => ({
    id: row.id, examKey: row.metadata.examKey, document: row.document,
    contentHash: row.metadata.contentHash,
  })),
  stats: questionCatalog.stats,
}));
