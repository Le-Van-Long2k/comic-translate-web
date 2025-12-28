import type { OCRResult, TranslateResult } from "../types";
import { apiClient } from "./client";

/**
 * Translate OCR text
 * POST /api/translate
 */
export async function translateText(
  ocrResults: OCRResult[],
  sourceLang: string,
  targetLang: string
): Promise<TranslateResult[]> {
  const response = await apiClient.post<TranslateResult[]>("/api/translate", {
    sourceLang,
    targetLang,
    texts: ocrResults,
  });

  return response.data;
}
