# 專案開發規範（AI agent 必讀）

本專案採「**Docker 沙盒 + OpenSpec 規格先行 + TDD**」流程。任何 agent（Claude Code、Antigravity）
接手時，一律遵守以下規則。

## 硬規則：所有執行都在容器內

**絕不在主機 (macOS) 直接跑 `node` / `npm run` / `vitest`。** 所有 build、執行、測試都在容器裡：

- 若已在 Dev Container 內（terminal 提示字元是容器內、`whoami` 回傳 `node`）：直接 `npm test`。
- 若在主機、用接法 A（容器外轉指令）：一律加前綴 `docker compose run --rm app`，例如：

  | 動作 | 指令 |
  |---|---|
  | 跑全部測試 | `docker compose run --rm app npm test` |
  | 型別檢查 | `docker compose run --rm app npm run typecheck` |
  | build | `docker compose run --rm app npm run build` |

先跑一次確認是綠燈，再開始改。

## 開發流程：OpenSpec → TDD

每個功能／變更都跑這個循環，**不可跳過規格直接寫 code**：

1. **OpenSpec（規格先行）**：在 `openspec/changes/` 建一份變更提案（要做什麼、驗收條件、
   影響哪些 spec）。等人類審核通過再往下。
2. **TDD 紅**：在 `tests/` 寫一個對應驗收條件、目前會失敗的測試 → 在容器裡跑 → 確認紅燈。
3. **TDD 綠**：在 `src/` 寫**最小**實作讓測試通過 → 容器裡跑 → 綠燈。
4. **重構**：整理程式碼 → 容器裡重跑全部測試確保沒壞。
5. **收尾**：commit；把該 change 標記完成／歸檔，並更新對應 spec。

## 回報格式

每次交付回報：改了哪些檔（`檔案:行號`）、測試在容器內的實跑結果（貼指令與輸出）、對應哪份 spec。
不得宣稱「應該會過」——要有容器內實跑的綠燈證據。
