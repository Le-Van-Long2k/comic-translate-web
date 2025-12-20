import React from "react";

function StatusGroup() {
  return (
    <div className="flex justify-end gap-2 items-center">
      <div className="flex gap-6 mx-2">
        {/* Manual */}
        <label className="flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-sm font-medium text-red-500">Manual</span>
          <input
            type="radio"
            name="mode"
            className="radio-info size-4"
          />
        </label>

        {/* Automatic */}
        <label className="flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-sm font-medium text-blue-500">Automatic</span>
          <input
            type="radio"
            name="mode"
            defaultChecked
            className="radio-info size-4"
          />
        </label>
      </div>
      <button className="btn btn-dash btn-success">Translate</button>
      <button className="btn btn-dash btn-error">Cancel</button>
    </div>
  );
}

export default StatusGroup;
