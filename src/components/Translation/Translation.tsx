import React from "react";

function Translation() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-1 flex-col w-full gap-1">
        <select defaultValue="Pick a color" className="select flex-1">
          <option disabled={true}>Translate from</option>
          <option>English</option>
          <option>Chinese</option>
          <option>Japanese</option>
          <option>Korean</option>
        </select>
        <textarea className="textarea flex-9" placeholder="Original"></textarea>
      </div>
      <div className="flex flex-1 flex-col w-full gap-1">
        <select defaultValue="Pick a color" className="select flex-1">
          <option disabled={true}>Translate to</option>
          <option>Vietnamese</option>
          <option>English</option>
        </select>
        <textarea className="textarea flex-9" placeholder="Translate"></textarea>
      </div>
    </div>
  );
}

export default Translation;
