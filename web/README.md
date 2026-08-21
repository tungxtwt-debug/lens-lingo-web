# Lens Lingo Web

Vue 3 + Vite static Web application. Object recognition runs entirely in the
browser with ONNX Runtime Web and `yolo11n-512-dynamic-v2.onnx`; it does not
call FastAPI or upload the selected image.

## Local development

```bash
cd web
pnpm install
pnpm dev
```

Open <http://127.0.0.1:5173>. The first recognition downloads the 10.47 MiB
model from this same local/static origin and stores it in browser Cache Storage.

## Production build

```bash
pnpm build
pnpm preview
```

The complete deployable static output is `web/dist/`. It contains the Vue
application, the ONNX model and local ONNX Runtime binaries. No Python server
is needed for object recognition.

## Runtime policy

- WASM is the only execution provider in the first public version.
- iPhone/iPad Safari, Android Chrome and desktop browsers all use single-thread
  WASM with SIMD enabled when the browser supports WebAssembly SIMD.
- WebGPU and JSEP runtime files are intentionally excluded so every Cloudflare
  Pages asset stays below 25 MiB.
- Model download is versioned in Cache Storage. The cache name contains the
  model hash; changing the model requires updating that value in
  `src/services/browserVision.js`.

## Speech

Pronunciation uses the device's native Web Speech API (`speechSynthesis`). The
app selects an installed voice matching the current learning locale and never
falls back to a voice from a different language. No audio file, backend, API
key, text upload or paid TTS service is used. Available voices depend on the
operating system and browser language packs.

## Licensing and model reproduction

See `../LICENSE` and `../THIRD_PARTY_LICENSES.md`. The checked-in model can be
reproduced in the existing Python development environment with:

```bash
python web/scripts/export_yolo11n_onnx.py
```

The export tool is not installed in the static Web application.
