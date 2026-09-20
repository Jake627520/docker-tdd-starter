// 五十音 App 的 SRS（間隔重複）排程器 —— Leitner 盒子法。
export interface Card {
  id: string;
  /** Leitner 盒子 0..5，越高代表越熟、間隔越長 */
  box: number;
  /** 第幾天該再考（整數日） */
  dueDay: number;
}

const MAX_BOX = 5;
/** box → 下次間隔天數 */
const INTERVAL_DAYS = [0, 1, 2, 4, 7, 15];

/**
 * 依這次作答結果，算出卡片更新後的狀態。
 * 答對：升一個盒子（封頂 MAX_BOX），間隔依新盒子拉長。
 * 答錯：打回 box 0，當天重考。
 */
export function review(card: Card, correct: boolean, today: number): Card {
  if (!correct) {
    return { ...card, box: 0, dueDay: today };
  }
  const box = Math.min(card.box + 1, MAX_BOX);
  return { ...card, box, dueDay: today + INTERVAL_DAYS[box] };
}
