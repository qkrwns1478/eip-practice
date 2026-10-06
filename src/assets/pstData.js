import { pstData_2025_1 } from './pstData/2025-1.js';
import { pstData_2025_2 } from './pstData/2025-2.js';
import { pstData_2025_3 } from './pstData/2025-3.js';
import { pstData_2024_1 } from './pstData/2024-1.js';
import { pstData_2024_2 } from './pstData/2024-2.js';
import { pstData_2024_3 } from './pstData/2024-3.js';
import { pstData_2023_1 } from './pstData/2023-1.js';
import { pstData_2023_2 } from './pstData/2023-2.js';
import { pstData_2023_3 } from './pstData/2023-3.js';
import { pstData_2022_1 } from './pstData/2022-1.js';
import { pstData_2022_2 } from './pstData/2022-2.js';
import { pstData_2022_3 } from './pstData/2022-3.js';
import { pstData_2026_1 } from './pstData/2026-1.js';
import { pstData_2026_2 } from './pstData/2026-2.js';
import { pstData_2021_1 } from './pstData/2021-1.js';
import { pstData_2021_2 } from './pstData/2021-2.js';
import { pstData_2021_3 } from './pstData/2021-3.js';
import { pstData_2020_1 } from './pstData/2020-1.js';
import { pstData_2020_2 } from './pstData/2020-2.js';
import { pstData_2020_3 } from './pstData/2020-3.js';
import { pstData_2020_4 } from './pstData/2020-4.js';

export const pstData = [
  ...pstData_2025_1,
  ...pstData_2025_2,
  ...pstData_2025_3,
  ...pstData_2024_1,
  ...pstData_2024_2,
  ...pstData_2024_3,
  ...pstData_2023_1,
  ...pstData_2023_2,
  ...pstData_2023_3,
  ...pstData_2022_1,
  ...pstData_2022_2,
  ...pstData_2022_3,
  ...pstData_2026_1,
  ...pstData_2026_2,
  ...pstData_2021_1,
  ...pstData_2021_2,
  ...pstData_2021_3,
  ...pstData_2020_1,
  ...pstData_2020_2,
  ...pstData_2020_3,
  ...pstData_2020_4,
];

// Source-exam groups are kept separately so ordered practice does not rely on IDs.
export const pstExams = [
  { key: '2020-1', year: '2020', round: 1, questions: pstData_2020_1 },
  { key: '2020-2', year: '2020', round: 2, questions: pstData_2020_2 },
  { key: '2020-3', year: '2020', round: 3, questions: pstData_2020_3 },
  { key: '2020-4', year: '2020', round: 4, questions: pstData_2020_4 },
  { key: '2021-1', year: '2021', round: 1, questions: pstData_2021_1 },
  { key: '2021-2', year: '2021', round: 2, questions: pstData_2021_2 },
  { key: '2021-3', year: '2021', round: 3, questions: pstData_2021_3 },
  { key: '2022-1', year: '2022', round: 1, questions: pstData_2022_1 },
  { key: '2022-2', year: '2022', round: 2, questions: pstData_2022_2 },
  { key: '2022-3', year: '2022', round: 3, questions: pstData_2022_3 },
  { key: '2023-1', year: '2023', round: 1, questions: pstData_2023_1 },
  { key: '2023-2', year: '2023', round: 2, questions: pstData_2023_2 },
  { key: '2023-3', year: '2023', round: 3, questions: pstData_2023_3 },
  { key: '2024-1', year: '2024', round: 1, questions: pstData_2024_1 },
  { key: '2024-2', year: '2024', round: 2, questions: pstData_2024_2 },
  { key: '2024-3', year: '2024', round: 3, questions: pstData_2024_3 },
  { key: '2025-1', year: '2025', round: 1, questions: pstData_2025_1 },
  { key: '2025-2', year: '2025', round: 2, questions: pstData_2025_2 },
  { key: '2025-3', year: '2025', round: 3, questions: pstData_2025_3 },
  { key: '2026-1', year: '2026', round: 1, questions: pstData_2026_1 },
  { key: '2026-2', year: '2026', round: 2, questions: pstData_2026_2 },
];
