import { http, HttpResponse } from "msw";

export const translateHandler = http.post("/api/translate", async () => {
  return HttpResponse.json([
    {
      boxId: "box-1",
      translatedText: "Xin chào mọi người.",
    },
    {
      boxId: "box-2",
      translatedText: "Hả?!",
    },
  ]);
});
