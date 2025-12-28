import type { OCRResult, TextBox } from "../types";
import { apiClient } from "./client";

/**
 * OCR text inside detected boxes
 * POST /api/ocr
 */
export async function ocrImage(
  imageFile: File,
  boxes: TextBox[]
): Promise<OCRResult[]> {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("boxes", JSON.stringify(boxes));

  const response = await apiClient.post<OCRResult[]>("/api/ocr", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
