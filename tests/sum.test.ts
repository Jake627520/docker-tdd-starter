import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
  it("空陣列回傳 0", () => {
    expect(sum([])).toBe(0);
  });

  it("加總多個數字", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  // ── 下一個 TDD 循環從這裡開始 ──
  // 1. 取消註解，先跑 `npm test` → 應該是「紅燈」(還沒實作負數處理規格)
  // 2. 到 src/sum.ts 寫最小實作讓它變「綠燈」
  // 3. 重構後再跑一次確認全綠
  // it("忽略 NaN", () => {
  //   expect(sum([1, NaN, 2])).toBe(3);
  // });
});
