import {
  Home,
  Upload,
  Save,
  Download,
  FileOutput,
  Settings,
} from "lucide-react";
import { usePanelStore } from "../../store/panelStore";

interface NavigationPanelProps {
  onUpload?: () => void;
  onSave?: () => void;
  onDownload?: () => void;
  onExport?: () => void;
  onHome?: () => void;
  onSettings?: () => void;
}

export default function NavigationPanel({ onUpload, onSave, onDownload, onExport, onHome, onSettings }: NavigationPanelProps) {
  const showSettings = usePanelStore((state) => state.showSettings);
  
  return (
    <nav className="flex flex-col items-center gap-6 py-6">
      <button onClick={onUpload} className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors bg-gray-200">
        <Upload size={22} />
      </button>

      <button onClick={onSave} className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors bg-gray-200">
        <Save size={22} />
      </button>

      <button onClick={onDownload} className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors bg-gray-200">
        <Download size={22} />
      </button>

      <button onClick={onExport} className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors bg-gray-200">
        <FileOutput size={22} />
      </button>

      {/* Home button */}
      <button
        onClick={onHome}
        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
          !showSettings ? "bg-yellow-400" : "bg-gray-200"
        }`}
      >
        <Home size={22} />
      </button>

      {/* Settings button */}
      <button
        onClick={onSettings}
        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
          showSettings ? "bg-yellow-400" : "bg-gray-200"
        }`}
      >
        <Settings size={22} />
      </button>
    </nav>
  );
}