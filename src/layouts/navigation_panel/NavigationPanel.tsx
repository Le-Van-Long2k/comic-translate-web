import {
  Home,
  Upload,
  Save,
  Pencil,
  Download,
  FileOutput,
  Settings,
} from "lucide-react";

const navItems = [
  { id: "upload", icon: Upload },
  { id: "save", icon: Save },
  { id: "edit", icon: Pencil },
  { id: "download", icon: Download },
  { id: "export", icon: FileOutput },
  { id: "home", icon: Home },
  { id: "settings", icon: Settings },
];

interface NavigationPanelProps {
  onUpload?: () => void;
}

export default function NavigationPanel({onUpload}: NavigationPanelProps) {
  return (
    <nav className="flex flex-col items-center gap-6 py-6">
      <button
        onClick={onUpload}
        className={`
          w-10 h-10 flex items-center justify-center rounded-lg
          transition-colors
        `}
      >
        <Upload size={22} />
      </button>

      {/* {navItems.map(({ id, icon: Icon }) => (
        <button
          key={id}
          className={`
            w-10 h-10 flex items-center justify-center rounded-lg
            transition-colors
          `}
        >
          <Icon size={22} />
        </button>
      ))} */}
    </nav>
  );
}
