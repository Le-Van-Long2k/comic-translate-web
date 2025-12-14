import { Stage, Layer, Image as KonvaImage } from "react-konva";
import { useEffect, useRef, useState } from "react";
import { useUploadStore } from "../../store/uploadStore";
import Konva from "konva";

type ImageInfo = {
  width: number;
  height: number;
} | null;

const MIN_SCALE = 0.3;
const MAX_SCALE = 2.0;
const SCALE_STEP = 1.1;

export default function CanvasPanel() {
  const stageRef = useRef<Konva.Stage>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [imageInfo, setImageInfo] = useState<ImageInfo>(null);
  const [scale, setScale] = useState(1);

  const files = useUploadStore((s) => s.files);
  const selectedFileId = useUploadStore((s) => s.selectedFileId);
  const selectedFile = files.find((f) => f.id === selectedFileId);

  // Load image
  useEffect(() => {
    if (!selectedFile) {
      imageRef.current = null;
      setImageInfo(null);
      setScale(1);
      return;
    }

    let cancelled = false;
    const img = new window.Image();

    img.onload = () => {
      if (cancelled) return;
      imageRef.current = img;
      setImageInfo({ width: img.width, height: img.height });

      const stage = stageRef.current;
      if (stage) {
        stage.scale({ x: 1, y: 1 });
        stage.position({ x: 0, y: 0 });
        stage.batchDraw();
      }
      setScale(1);
    };

    img.src = selectedFile.url;

    return () => {
      cancelled = true;
    };
  }, [selectedFile?.id]);

  // Ctrl + Wheel zoom
  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    if (!e.evt.ctrlKey) return;

    e.evt.preventDefault();

    const stage = stageRef.current;
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    const direction = e.evt.deltaY > 0 ? -1 : 1;
    let newScale =
      direction > 0 ? oldScale * SCALE_STEP : oldScale / SCALE_STEP;

    newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();

    setScale(newScale);
  };

  return (
    <div className="relative w-full h-full overflow-auto bg-gray-50 border">
      <div className="absolute inset-0 overflow-auto">
        {imageInfo && (
          <Stage
            ref={stageRef}
            width={imageInfo.width}
            height={imageInfo.height}
            draggable={false}
            onWheel={handleWheel}
          >
            <Layer listening={false}>
              <KonvaImage
                // eslint-disable-next-line react-hooks/refs
                image={imageRef.current ?? undefined}
                width={imageInfo.width}
                height={imageInfo.height}
              />
            </Layer>
          </Stage>
        )}
      </div>

      {/* Zoom indicator */}
      {imageInfo && (
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-[25px] font-medium">
          {Math.round(scale * 100)}%
        </div>
      )}
    </div>
  );
}
