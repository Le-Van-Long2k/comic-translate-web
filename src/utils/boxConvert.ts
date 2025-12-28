import type { TextBox } from "../types";

export function boxToRect(box: TextBox) {
  return {
    x: box.x1,
    y: box.y1,
    width: box.x2 - box.x1,
    height: box.y2 - box.y1,
  };
}

export function rectToBox(id: string, rect: any): TextBox {
  return {
    id,
    x1: rect.x,
    y1: rect.y,
    x2: rect.x + rect.width,
    y2: rect.y + rect.height,
  };
}
