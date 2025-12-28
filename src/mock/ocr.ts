import { http, HttpResponse } from "msw";

export const ocrHandler = http.post("/api/ocr", async () => {
  return HttpResponse.json([
    {
      boxId: "box-1",
      text: "皆さんこんにちは",
    },
    {
      boxId: "box-2",
      text: "何？！",
    },
  ]);
});
