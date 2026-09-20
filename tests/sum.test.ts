import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
  it("空陣列回傳 0", () => {
    expect(sum([])).toBe(0);
  });

  it("加總多個數字", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it("忽略 NaN", () => {
    expect(sum([1, NaN, 2])).toBe(3);
  });
});
