import { http, HttpResponse } from "msw";

export const detectHandler = http.post("/api/detect", async ({ request }) => {
  return HttpResponse.json([
    {
      id: "box-1",
      x1: 120,
      y1: 80,
      x2: 420,
      y2: 200,
    },
    {
      id: "box-2",
      x1: 500,
      y1: 220,
      x2: 760,
      y2: 320,
    },
  ]);
});
