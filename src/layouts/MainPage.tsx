import React, { useRef } from "react";
import Sidebar from "../components/Toolbar/Sidebar";
import CanvasArea from "./CanvasArea";
import AssetsPanel from "./AssetsPanel";
import TranslationPanel from "./TranslationPanel";
import PropertiesPanel from "./PropertiesPanel";
import MainToolbar from "./MainToolbar";
import { useUploadStore } from "../store/uploadStore";
import type { UploadedFile } from "../types/file";

function MainPage() {
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
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="flex-1">
        <input
          ref={fileInputRef}
          type="file"
          hidden
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
        <Sidebar onUpload={openUploadDialog}></Sidebar>
      </div>

      <div className="flex-30 flex flex-col w-full">
        <div className="flex-1">
          <MainToolbar></MainToolbar>
        </div>

        <div className="flex-10">
          <div className="flex flex-row h-full">
            <div className="flex-1 bg-gray-500 m-1">
              <AssetsPanel></AssetsPanel>
            </div>
            <div className="flex-5 bg-gray-600 m-1">
              <CanvasArea></CanvasArea>
            </div>
            <div className="flex-2 flex flex-col h-full m-1">
              <div className="flex-1 bg-gray-700">
                <TranslationPanel></TranslationPanel>
              </div>
              <div className="flex-1 bg-gray-800">
                <PropertiesPanel></PropertiesPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
