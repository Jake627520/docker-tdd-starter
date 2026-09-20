# Dev Container 基底：官方 Node 22 slim。node 映像本身已內建非 root 的 `node` 使用者 (uid 1000)，
# 且自帶 npm/npx，足夠跑 build 與 vitest。
FROM node:22-bookworm-slim

WORKDIR /workspace

# 預先建立 node_modules 並交給 node 使用者：compose 的 named volume 會以此目錄的
# 擁有者來初始化，否則非 root 的 node 使用者對 volume 沒有寫入權限（npm install 會 permission denied）。
RUN mkdir -p /workspace/node_modules && chown -R node:node /workspace

# 以非 root 身分執行，符合容器安全實務。
USER node

# ── 若日後真的需要容器內 git（且網路連得到 Debian 源）再取消下面註解 ──
# 中國網路可先換鏡像源避免 apt 失敗：
# USER root
# RUN sed -i 's|deb.debian.org|mirrors.tuna.tsinghua.edu.cn|g' /etc/apt/sources.list.d/debian.sources \
#     && apt-get update && apt-get install -y --no-install-recommends git ca-certificates \
#     && rm -rf /var/lib/apt/lists/*
# USER node
