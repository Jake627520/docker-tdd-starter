import { describe, it, expect } from "vitest";
import { review, type Card } from "../src/srs.js";

const card = (box: number): Card => ({ id: "き", box, dueDay: 0 });

describe("review (Leitner SRS 排程)", () => {
  it("答錯：box 打回 0、當天重考", () => {
    const r = review(card(3), false, 10);
    expect(r.box).toBe(0);
    expect(r.dueDay).toBe(10);
  });

  it("新卡答對：升到 box 1、隔天再考", () => {
    const r = review(card(0), true, 10);
    expect(r.box).toBe(1);
    expect(r.dueDay).toBe(11);
  });

  it("box 2 答對：升到 box 3、間隔 4 天", () => {
    const r = review(card(2), true, 10);
    expect(r.box).toBe(3);
    expect(r.dueDay).toBe(14);
  });

  it("最高盒答對：box 維持 5、不溢出、間隔 15 天", () => {
    const r = review(card(5), true, 10);
    expect(r.box).toBe(5);
    expect(r.dueDay).toBe(25);
  });
});
