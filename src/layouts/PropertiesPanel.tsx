import React from "react";
import TextSetting from "../components/Toolbar/TextSetting";
import TextColor from "../components/Toolbar/TextColor";
import TextAlignment from "../components/Toolbar/TextAlignment";
import TextStyles from "../components/Toolbar/TextStyles";

function PropertiesPanel() {
  return (
    <div className="flex flex-col w-full h-full justify-center">
      <div className="flex-1">
        <TextSetting></TextSetting>
      </div>

      <div className="flex-1 flex flex-row">
        <div className="flex-1">
          <TextColor></TextColor>
        </div>
        <div className="flex-5 ml-2 mr-1">
          <TextAlignment></TextAlignment>
        </div>
        <div className="flex-5 ml-2 mr-1">
          <TextStyles></TextStyles>
        </div>
      </div>

      <div className="flex-4">
        
      </div>
    </div>
  );
}

export default PropertiesPanel;
