import React from "react";

function TextSetting() {
  return (
    <div className="flex flex-row h-full gap-1 mt-3 justify-center">
      <select defaultValue="Pick a color" className="select flex-6">
        <option disabled={true}>Font</option>
        <option>Arial</option>
        <option>Time New Roman</option>
      </select>
      <select defaultValue="Pick a color" className="select flex-1">
        <option disabled={true}>Size</option>
        <option>16</option>
        <option>18</option>
        <option>20</option>
      </select>
      <select defaultValue="Pick a color" className="select flex-1">
        <option disabled={true}>Line spacing</option>
        <option>1.0</option>
        <option>1.2</option>
        <option>1.4</option>
      </select>
    </div>
  );
}

export default TextSetting;
