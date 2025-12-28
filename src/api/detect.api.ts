import type { TextBox } from "../types";
import { apiClient } from "./client";

/**
 * Detect text boxes from image
 * POST /api/detect
 */
export async function detectTextBoxes(imageFile: File): Promise<TextBox[]> {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await apiClient.post<TextBox[]>("/api/detect", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
