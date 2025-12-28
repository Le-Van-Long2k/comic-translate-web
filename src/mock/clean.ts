import { http, HttpResponse } from "msw";

export const cleanHandler = http.post("/api/clean", async () => {
  return HttpResponse.json({
    imageUrl: "/mock/cleaned-image.png",
  });
});
