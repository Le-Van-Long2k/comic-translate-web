import { detectHandler } from "./detect";
import { cleanHandler } from "./clean";
import { ocrHandler } from "./ocr";
import { translateHandler } from "./translate";
import { setupWorker } from "msw/browser";

export const handlers = [
  detectHandler,
  ocrHandler,
  translateHandler,
  cleanHandler,
];

export const worker = setupWorker(...handlers);
