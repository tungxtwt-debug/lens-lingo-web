# Cloudflare Pages deployment

Do not create a paid resource, buy a domain, or add a payment method for this
project. Use a Cloudflare Pages Free project and its `*.pages.dev` address.

## Build settings

| Setting | Value |
| --- | --- |
| Root directory | `web` |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Node.js | `22.12.0` or newer Node 22 |
| Package manager | pnpm `11.19.0` |

If the dashboard requires an environment variable for Node, set
`NODE_VERSION=22.12.0`. No API URL, API key, secret, backend binding, Functions
binding, database, R2 bucket or paid service is required.

## Routing

`public/_redirects` is copied into `dist/` and applies the SPA fallback:

```text
/* /index.html 200
```

Existing static files are served first. Direct navigation to `/result` or
`/word/...` therefore loads Vue Router instead of returning Cloudflare's 404.
If the in-memory image state is missing, the application shows its existing
friendly return-home state.

## Caching

`public/_headers` keeps `/` and `index.html` uncached while giving hashed build
assets, the ONNX model and WASM runtime a one-year immutable cache. The model
request contains its SHA-256 as a version query, and Cache Storage uses the same
hash. When the model changes, update `MODEL_HASH` in
`src/services/browserVision.js`; the browser requests the new version and
removes older Lens Lingo model caches.

## Pre-deployment gate

1. Run `pnpm install --frozen-lockfile` and `pnpm build` from `web/`.
2. Confirm every file under `dist/` is below 25 MiB.
3. Confirm `dist/` contains `_headers`, `_redirects`, one ONNX model and only
   the standard WASM runtime pair.
4. Search `dist/` for localhost, `/api/`, secrets and private configuration.
5. Complete the physical-device checklist in `DEVICE_ACCEPTANCE.md`.
6. Publish the complete corresponding source and license notices under
   AGPL-3.0 before making the Pages site publicly available.
