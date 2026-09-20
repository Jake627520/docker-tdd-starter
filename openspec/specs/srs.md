# Spec：五十音 SRS 間隔重複排程

狀態：`active`（由變更 0002 建立，測試全綠後成立）

## 能力
`review(card, correct, today): Card` —— 依作答結果算出卡片更新後的盒子與下次到期日。

```ts
interface Card { id: string; box: number; dueDay: number }
```

## 規則
- Leitner 盒子範圍 `0..5`，間隔天數依 box：`[0, 1, 2, 4, 7, 15]`。
- 答對：`box = min(box + 1, 5)`，`dueDay = today + 間隔[新 box]`。
- 答錯：`box = 0`，`dueDay = today`（當天重考）。
- 純函式，不改動傳入的 card（回傳新物件）。

## 對應測試
`tests/srs.test.ts`（4 條，涵蓋答錯歸零、新卡升級、中段升級間隔、最高盒封頂）。
