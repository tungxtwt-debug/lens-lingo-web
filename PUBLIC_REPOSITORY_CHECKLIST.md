# Public repository checklist

## Included in the release commit

- AGPL-3.0 `LICENSE` and `THIRD_PARTY_LICENSES.md`.
- Vue/Vite application source, routes, styles and seven-language learning data.
- Browser-local YOLO preprocessing, WASM inference, decoding, NMS and COCO
  category mapping source.
- `yolo11n-512-dynamic-v2.onnx`, its SHA-256 provenance and reproducible export
  script.
- ONNX Runtime Web standard WASM runtime pair and pinned package lock.
- Compact Open English WordNet-derived data and its generation script.
- Cloudflare Pages `_headers`, `_redirects`, build instructions and physical
  device acceptance record.

## Explicitly excluded

- `.env` files, API keys, credentials and `project.private.config.json`.
- Full WordNet database.
- CLIP and YOLO-World weights.
- Python virtual environments, Node dependencies, pnpm stores and build caches.
- Browser ONNX experiments and generated `web/dist/` output.
- Personal filesystem paths and LAN addresses.

## Required immediately before going public

1. Review the pending commit and confirm the repository contains no unrelated
   private history or secrets.
2. Push the release commit while the repository is still private.
3. Make the complete corresponding source repository public under AGPL-3.0.
4. Only then connect the repository to a Cloudflare Pages Free project.
5. Confirm the selected plan is Free and no payment method, paid add-on,
   Functions binding or cloud AI service is requested.

Android Chrome remains explicitly untested until a physical device is
available. Pronunciation uses the device-native Web Speech API; no static audio
or TTS backend is included.
