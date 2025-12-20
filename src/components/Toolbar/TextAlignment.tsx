import { TextAlignCenter, TextAlignEnd, TextAlignStart } from "lucide-react";
import React from "react";

function TextAlignment() {
  return (
    <div className="flex flex-row w-full gap-1">
      <button className="btn btn-square btn-sm flex-1">
        <TextAlignStart />
      </button>
      <button className="btn btn-square btn-sm flex-1">
        <TextAlignCenter/>
      </button>
      <button className="btn btn-square btn-sm flex-1">
        <TextAlignEnd />
      </button>
    </div>
  );
}

export default TextAlignment;
