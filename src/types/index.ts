export interface TextBox {
  id: string;
  x1: number; // left
  y1: number; // top
  x2: number; // right
  y2: number; // bottom
}

export function boxToRect(box: TextBox) {
  return {
    x: box.x1,
    y: box.y1,
    width: box.x2 - box.x1,
    height: box.y2 - box.y1,
  };
}

export function rectToBox(id: string, rect) {
  return {
    id,
    x1: rect.x,
    y1: rect.y,
    x2: rect.x + rect.width,
    y2: rect.y + rect.height,
  };
}

export interface OCRResult {
  boxId: string;
  text: string;
}

export interface TranslateResult {
  boxId: string;
  translatedText: string;
}

export interface CleanImageResult {
  imageUrl: string;
}
