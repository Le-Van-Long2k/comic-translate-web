import React from "react";

function ProgressStatus() {
  return (
    <div className="relative w-[75vw]">
      <progress
        className="progress progress-info w-full"
        value="40"
        max="100"
      ></progress>

      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-info">
        40%
      </span>
    </div>
  );
}

export default ProgressStatus;
