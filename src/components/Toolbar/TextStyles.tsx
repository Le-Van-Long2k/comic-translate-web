import { Bold, Italic, Underline } from "lucide-react";
import React from "react";

function TextStyles() {
  return (
    <div className="flex flex-row w-full gap-1 justify-center">
      <button className="btn btn-square btn-sm flex-1">
        <Bold />
      </button>
      <button className="btn btn-square btn-sm flex-1">
        <Italic />
      </button>
      <button className="btn btn-square btn-sm flex-1">
        <Underline />
      </button>
    </div>
  );
}

export default TextStyles;
