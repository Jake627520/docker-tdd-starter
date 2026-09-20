# 專案：docker-tdd-starter

> 這是 OpenSpec 的專案脈絡檔（placeholder）。建議在容器內跑官方 CLI 產生 canonical 結構：
> `npx openspec@latest init`（先確認套件名；官方 repo: Fission-AI/OpenSpec）。
> 若官方 CLI 版面與本檔不同，以 CLI 產出的為準。

## 目的
用最小可跑範例示範「Docker 沙盒 + OpenSpec + TDD」的開發流程。

## 技術棧
- Node 22 / TypeScript
- 測試：Vitest
- 執行環境：Dev Container（容器內開發）

## 規格與變更放哪
- `openspec/specs/`：目前已成立、當前為真的能力規格。
- `openspec/changes/`：進行中的變更提案（審核通過→實作→完成後歸檔並更新 specs/）。
