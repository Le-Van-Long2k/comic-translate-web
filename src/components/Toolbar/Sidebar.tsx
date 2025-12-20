import { FileUp, Home, Save, SaveAll, Settings } from "lucide-react";
import React from "react";

interface SidebarProps {
  onUpload?: () => void;
}

function Sidebar({ onUpload }: SidebarProps) {
  return (
    <ul className="menu w-full grow justify-center">
      <li>
        <button className="tooltip tooltip-right" data-tip="Home">
          <Home className="my-5 size-6 inline-block" />
        </button>
      </li>
      <li>
        <button className="tooltip tooltip-right" data-tip="File Up" onClick={onUpload}>
          <FileUp className="my-5 size-6 inline-block" />
        </button>
      </li>
      <li>
        <button className="tooltip tooltip-right" data-tip="Save">
          <Save className="my-5 size-6 inline-block" />
        </button>
      </li>
      <li>
        <button className="tooltip tooltip-right" data-tip="Save All">
          <SaveAll className="my-5 size-6 inline-block" />
        </button>
      </li>
      <li>
        <button className="tooltip tooltip-right" data-tip="Settings">
          <Settings className="my-5 size-6 inline-block" />
        </button>
      </li>
    </ul>
  );
}

export default Sidebar;
