import type { CleanImageResult, TextBox } from "../types";
import { apiClient } from "./client";

/**
 * Remove original text from image
 * POST /api/clean
 */
export async function cleanTextBox(
  imageFile: File,
  boxes: TextBox[]
): Promise<CleanImageResult> {
  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("boxes", JSON.stringify(boxes));

  const response = await apiClient.post<CleanImageResult>(
    "/api/clean",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}
