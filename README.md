# docker-tdd-starter

Docker 沙盒 + OpenSpec 規格先行 + TDD 的最小起手式（Node 22 / TypeScript / Vitest）。

## 前置：先裝好 Docker
本專案需要 Docker。確認方式：
```bash
which docker || ls /Applications | grep -i docker
```
沒輸出代表還沒裝。macOS 安裝：`brew install --cask docker`（Docker Desktop）或
`brew install orbstack`（較輕量），裝完把 app 打開讓 daemon 啟動。

## 用法 B：Dev Container（推薦，AI 在容器內）
1. 用 Antigravity / VS Code 開這個資料夾。
2. 命令面板 → 「Dev Containers: Reopen in Container」。
3. 進去後（`whoami` 應為 `node`）：
   ```bash
   npm test        # 第一次應該全綠 → 證明工具鏈 OK
   ```

## 用法 A：容器外轉指令（不進容器，指令加前綴）
```bash
docker compose build
docker compose run --rm app npm install
docker compose run --rm app npm test
```

## 開發循環（每個功能都照這個走）
1. `openspec/changes/` 寫變更提案 → 人審通過
2. `tests/` 寫失敗測試 →（容器內）跑 → 紅
3. `src/` 寫最小實作 →（容器內）跑 → 綠
4. 重構 →（容器內）重跑全部 → 全綠
5. commit、歸檔 change、更新 `openspec/specs/`

規則細節見 [CLAUDE.md](./CLAUDE.md)。OpenSpec 官方 canonical 結構請在容器內跑
`npx openspec@latest init` 產生（先確認套件名）。

## TDD 範例
`src/sum.ts` + `tests/sum.test.ts`。測試檔尾有註解，示範下一個「紅→綠」循環怎麼開。
