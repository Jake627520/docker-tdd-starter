# 變更提案 0002：五十音 SRS 間隔重複排程器

狀態：`done`（測試全綠、已寫入 openspec/specs/srs.md）

## 為什麼
五十音 App 要幫使用者安排「哪張卡什麼時候該再考」。需要一個純函式決定：
答對就往上一個 Leitner 盒子、拉長間隔；答錯就打回重來。純邏輯先獨立寫好、測試涵蓋，
UI（React）之後再接。

## 要做什麼
提供 `review(card, correct, today): Card`。

```ts
interface Card { id: string; box: number; dueDay: number }
// box：Leitner 盒子 0..5；dueDay：第幾天該再考（整數日）
function review(card: Card, correct: boolean, today: number): Card
```

Leitner 間隔（天）依 box：`[0, 1, 2, 4, 7, 15]`，box 封頂 5。

## 驗收條件（→ 每條對應一個測試）
- [x] 答錯：box 打回 `0`、當天就要重考（`dueDay === today`）
- [x] 新卡（box 0）答對：升到 box 1、隔天再考（`dueDay === today + 1`）
- [x] box 2 答對：升到 box 3、間隔 4 天（`dueDay === today + 4`）
- [x] 已在最高盒（box 5）答對：box 維持 5、不再往上溢出，間隔 15 天

## 影響的 spec
- 新增 `openspec/specs/srs.md`（實作完成、測試全綠後寫入）
