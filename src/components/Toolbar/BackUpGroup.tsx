import { RotateCcw, RotateCw } from "lucide-react";
import React from "react";

function BackUpGroup() {
  return (
    <span>
      <button className="btn btn-soft btn-circle">
        <RotateCcw className="mx-3 size-5 inline-block" />
      </button>
      <button className="btn btn-soft btn-circle">
        <RotateCw className="mx-3 size-5 inline-block" />
      </button>
    </span>
  );
}

export default BackUpGroup;
