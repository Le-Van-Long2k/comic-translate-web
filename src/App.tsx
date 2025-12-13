import { useRef } from "react";
import CanvasPanel from "./layouts/canvas_panel/CanvasPanel";
import FilePanel from "./layouts/File_panel/FilePanel";
import NavigationPanel from "./layouts/navigation_panel/NavigationPanel";
import SettingTranslationPanel from "./layouts/setting_translation_panel/SettingTranslationPanel";
import TranslationPanel from "./layouts/translation_panel/TranslationPanel";
import WorkFlowPanel from "./layouts/workflow_panel/WorkFlowPanel";
import { useUploadStore } from "./store/uploadStore";
import type { UploadedFile } from "./types/file";

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const addFiles = useUploadStore((state) => state.addFiles);

  const openUploadDialog = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      url: URL.createObjectURL(file),
      file: file,
    }));

    addFiles(newFiles);
  };

  return (
    <div className="h-screen w-screen flex bg-gray-100 overflow-hidden">
      {/* Left: NavigationPanel (full height, includes top) */}
      <aside className="w-15 bg-gray-400 border-r flex flex-col overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <input
            ref={fileInputRef}
            type="file"
            hidden
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
          <NavigationPanel onUpload={openUploadDialog} />
        </div>
      </aside>

      {/* Right area (Top + Body) */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top: WorkFlowPanel */}
        <header className="h-20 bg-gray-350 border-b flex items-center px-4">
          <WorkFlowPanel />
        </header>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* FilePanel: between NavigationPanel and CanvasPanel */}
          <aside className="w-100 bg-gray-300 border-r overflow-y-auto">
            <FilePanel />
          </aside>

          {/* Center: CanvasPanel */}
          <main className="flex-1 min-w-[200px] overflow-auto bg-gray-50">
            <CanvasPanel />
          </main>

          {/* Right: TranslationPanel + SettingTranslationPanel */}
          <aside className="w-100 bg-gray-300 border-l flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto border-b">
              <TranslationPanel />
            </div>
            <div className="flex-1 overflow-y-auto">
              <SettingTranslationPanel />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
