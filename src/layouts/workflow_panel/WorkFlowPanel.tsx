import React, { useState } from "react";
import { Undo, Redo } from "lucide-react";

export default function WorkFlowPanel() {
  const [progress, setProgress] = useState(40); // ví dụ 40% hiện tại

  return (
    <div className="w-full p-0 bg-gray-50 rounded">
      {/* Hàng 1: Controls */}
      <div className="flex items-center w-full mb-4">
        {/* Left: Undo & Redo */}
        <div className="flex gap-2">
          <button className="flex items-center justify-center gap-1 px-2 py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            <Undo size={16} />
          </button>
          <button className="flex items-center justify-center gap-1 px-2 py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            <Redo size={16} />
          </button>
        </div>

        {/* Center: main actions */}
        <div className="flex gap-2 mx-auto flex-1 max-w-4xl">
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            Detect Text Boxes
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            Get Translations
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            Segment Text
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            Clean Image
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-200 rounded hover:bg-gray-300 whitespace-nowrap">
            Render
          </button>
        </div>

        {/* Right: Radio + Translate / Cancel */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Radio buttons */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1">
              <input type="radio" name="mode" value="manual" />
              Manual
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="mode" value="automatic" />
              Automatic
            </label>
          </div>

          {/* Translate / Cancel */}
          <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Translate
          </button>
          <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Cancel
          </button>
        </div>
      </div>

      {/* Status bar với text % nằm trên thanh */}
      <div className="w-full h-3 bg-gray-300 rounded overflow-hidden relative">
        {/* Thanh tiến độ */}
        <div
          className="bg-green-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>

        {/* Text % nằm chính giữa */}
        <span className="absolute inset-0 flex items-center justify-center text-[12px] font-medium text-black">
          {progress}%
        </span>
      </div>
    </div>
  );
}
