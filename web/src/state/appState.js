import { reactive } from "vue";

const savedLanguage = localStorage.getItem("lens-lingo-language") || "en";

export const appState = reactive({
  language: savedLanguage,
  imageUrl: "",
  imageBlob: null,
  imageName: "photo.jpg",
  imageWidth: 0,
  imageHeight: 0,
  objects: [],
  selectedObjectId: "",
  analysisStatus: "idle",
  analysisError: ""
});

export function setLanguage(language) {
  appState.language = language;
  localStorage.setItem("lens-lingo-language", language);
}

export function setImage(processed) {
  if (appState.imageUrl) URL.revokeObjectURL(appState.imageUrl);
  appState.imageBlob = processed.blob;
  appState.imageUrl = URL.createObjectURL(processed.blob);
  appState.imageName = processed.name;
  appState.imageWidth = processed.width;
  appState.imageHeight = processed.height;
  appState.objects = [];
  appState.selectedObjectId = "";
  appState.analysisStatus = "idle";
  appState.analysisError = "";
}

export function selectObject(id) {
  appState.selectedObjectId = String(id);
}

export function getSelectedObject() {
  return appState.objects.find((item) => item.id === appState.selectedObjectId) || null;
}
