# Third-party licenses and model provenance

This repository's own source is distributed under the GNU Affero General
Public License v3.0. The full text is in `LICENSE`.

This file records the principal third-party material used by the static Lens
Lingo Web build. It is an engineering compliance record, not legal advice.

## Ultralytics YOLO11n

- Component: Ultralytics source used for model export and the pretrained
  `yolo11n.pt` weights from the Ultralytics distribution.
- Version used for the checked-in export: Ultralytics `8.4.122`.
- License: GNU Affero General Public License v3.0 (AGPL-3.0), unless a separate
  Ultralytics Enterprise license has been obtained.
- Upstream: <https://github.com/ultralytics/ultralytics>
- License information: <https://www.ultralytics.com/license>

The exported ONNX parameters remain subject to the applicable license of the
source weights. Lens Lingo therefore takes the zero-cost route: the application
source and the scripts needed to reproduce the distributed model are prepared
for publication under AGPL-3.0. No Enterprise license is assumed.

### Distributed ONNX model

- File: `web/public/models/yolo11n-512-dynamic-v2.onnx`
- SHA-256: `d3c0638cc1a384f0dda77134287b5dd98bbe1a86e4395235c4a2d57565d3d04d`
- Size: 10,972,717 bytes
- Source weights: the official Ultralytics `yolo11n.pt` pretrained COCO model.
- Export settings: ONNX, opset 17, `imgsz=512`, dynamic input shapes,
  `simplify=True`, no embedded NMS.
- Reproduction script: `web/scripts/export_yolo11n_onnx.py`.
- Application preprocessing, output decoding, NMS, COCO mapping and WASM
  runtime source: `web/src/services/browserVision.js` and
  `web/src/services/cocoClasses.js`.

## ONNX Runtime Web

- Component: `onnxruntime-web` `1.27.0`, including the checked-in WASM runtime
  artifacts under `web/public/ort/`.
- Copyright: Microsoft Corporation and ONNX Runtime contributors.
- License: MIT License.
- Upstream: <https://github.com/microsoft/onnxruntime>
- License text: <https://github.com/microsoft/onnxruntime/blob/main/LICENSE>

The MIT license permits use, copy, modification and distribution, provided its
copyright and permission notice are included. The upstream license and notices
should remain available with any redistributed build or source archive.

> Copyright (c) Microsoft Corporation. All rights reserved.
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## Open English WordNet 2025

- Component: the small derived knowledge subset in
  `web/src/data/wordKnowledge.js`.
- Source: Open English WordNet 2025, <https://en-word.net/>.
- License: Creative Commons Attribution 4.0 International (CC BY 4.0),
  <https://creativecommons.org/licenses/by/4.0/>.
- Attribution: Open English WordNet, including material derived from Princeton
  WordNet.
- Changes made by Lens Lingo: selected only the product vocabulary, extracted
  selected definitions and relations, normalized the records, and converted
  them to a compact JavaScript data module.
- Reproduction script: `server/scripts/generate_word_knowledge.py`.

The full WordNet database is not part of the Web deployment.

## Vue and Vue Router

- Components: Vue `3.5.x` and Vue Router `4.6.x`.
- License: MIT License.
- Upstream: <https://github.com/vuejs/core> and
  <https://github.com/vuejs/router>.

## Vite

- Component: Vite `7.3.x`, used only to build the static Web application.
- License: MIT License.
- Upstream: <https://github.com/vitejs/vite>.

## COCO class names

The 80 category names in `web/src/services/cocoClasses.js` are identifiers for
the COCO object categories used by the pretrained model. No COCO images or
annotations are distributed in the Web build.

## Network and data handling

The static application downloads its model and ONNX Runtime binaries from the
same static origin. Selected photos are decoded and processed in the user's
browser and are not uploaded to Lens Lingo, Ultralytics, Microsoft, or a
third-party AI API.
