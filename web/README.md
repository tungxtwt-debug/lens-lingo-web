# 看见单词 Web

独立的 Vue 3 + Vite Web 客户端。它不会读取或修改微信小程序页面。

## 本地运行

1. 在项目原有方式下启动 FastAPI，并确认 `http://localhost:3000/health` 可访问。
2. 在本目录安装依赖并启动 Vite：

   ```bash
   pnpm install
   pnpm dev
   ```

3. 打开终端显示的本地网址（默认 `http://localhost:5173`）。

复制 `.env.example` 为 `.env.local` 后可覆盖默认配置。识别请求默认连接
`http://localhost:3000`，超时为 120 秒。

## 发音提供方

- `VITE_TTS_PROVIDER=local-api`：开发期请求 FastAPI `/api/tts`。
- `VITE_TTS_PROVIDER=static-audio`：从
  `${VITE_TTS_STATIC_BASE_URL}/{language}/{word}.mp3` 读取静态音频。

macOS 本地 TTS 依赖 `/usr/bin/say`。需要从普通 Terminal 启动 FastAPI；受限或沙箱化的终端可能无法生成音频。

## 构建

```bash
pnpm build
pnpm preview
```
