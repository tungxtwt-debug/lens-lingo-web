# Physical-device acceptance checklist

## Stage 9.6 recorded result

- iPhone Safari: functional acceptance passed on a real device. Home page,
  local image selection, camera permission/capture, image orientation, local
  recognition, label placement, word detail, crop, two examples, related
  words, WordNet content and return-state retention were confirmed working.
- Performance: the tester reported the speed as acceptable but did not record
  numeric cold-load or inference timings. No 416/320 comparison was requested.
- Stability: no memory warning, unexpected page reload, white screen or crash
  was reported.
- Speech: the earlier static-audio placeholder has since been replaced by the
  device-native Web Speech API and requires a new physical-device check.
- Android Chrome: not tested because no physical Android device was available.
  No Android result is inferred from desktop testing.

Test the final production build or the final `*.pages.dev` preview. Do not add a
cloud inference fallback when a device is slow; record the measurements first.

## Measurement method

Use a stopwatch for first model load if mobile developer tools are unavailable.
For exact measurements, connect Safari Web Inspector or Chrome remote debugging
and read the `[Lens Lingo vision]` console entry. It records `modelLoadMs`,
`preprocessMs`, `inferenceMs` and detection count without uploading telemetry.

Before the cold test, clear this site's browser data/cache. For the warm test,
keep the tab open and recognize the same image a second time.

## iPhone Safari

- [ ] Home page opens over HTTPS and layout fits the screen.
- [ ] First model loading progress reaches 100%.
- [ ] Record first model download + initialization: ______ ms.
- [ ] Select an image from Photos.
- [ ] Take a new photo with the rear camera input.
- [ ] Record first inference: ______ ms.
- [ ] Recognize the same image again; record warm inference: ______ ms.
- [ ] Labels are positioned correctly and remain tappable.
- [ ] Word detail shows crop, part of speech, translation, two examples,
      related words and WordNet definition.
- [ ] “听发音” plays the word with a voice matching the selected learning
      language; switching languages never reuses an English voice incorrectly.
- [ ] Back returns to the same image and labels.
- [ ] Close/reopen and confirm the model is read from cache.
- [ ] No image-upload request appears in Web Inspector.

Device/iOS version: ______. Result: PASS / FAIL. Notes: ______.

## Android Chrome

- [ ] Home page opens over HTTPS and layout fits the screen.
- [ ] First model loading progress reaches 100%.
- [ ] Record first model download + initialization: ______ ms.
- [ ] Select an image from Gallery/files.
- [ ] Take a new photo with the rear camera input.
- [ ] Record first inference: ______ ms.
- [ ] Recognize the same image again; record warm inference: ______ ms.
- [ ] Labels are positioned correctly and remain tappable.
- [ ] Word detail shows crop, part of speech, translation, two examples,
      related words and WordNet definition.
- [ ] “听发音” plays the word with a voice matching the selected learning
      language; switching languages never reuses an English voice incorrectly.
- [ ] Back returns to the same image and labels.
- [ ] Close/reopen and confirm the model is read from cache.
- [ ] No image-upload request appears in Chrome remote debugging.

Device/Android/Chrome version: ______. Result: PASS / FAIL. Notes: ______.

## Stop condition

If first load, memory pressure, or inference speed is clearly unacceptable,
record the device and exact timings and stop. Do not enable a cloud API or paid
backend. Input-size reduction or model/runtime optimization requires a separate
review after the measurements are reported.
