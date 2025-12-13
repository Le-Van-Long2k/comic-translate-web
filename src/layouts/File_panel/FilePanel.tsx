import { X } from "lucide-react";
import { useUploadStore } from "../../store/uploadStore";
import clsx from "clsx";

export default function FilePanel() {
  const files = useUploadStore((s) => s.files);
  const selectedFileId = useUploadStore((s) => s.selectedFileId);
  const selectFile = useUploadStore((s) => s.selectFile);
  const removeFile = useUploadStore((s) => s.removeFile);

  if (files.length === 0) {
    return <div className="p-4 text-gray-400 text-sm">No files uploaded</div>;
  }

  return (
    <div className="p-2 space-y-1">
      {files.map((file) => {
        const isSelected = file.id === selectedFileId;

        return (
          <div
            key={file.id}
            onClick={() => selectFile(file.id)}
            className={clsx(
              "flex items-center gap-2 text-sm px-2 py-1 rounded cursor-pointer",
              "hover:bg-gray-100",
              isSelected && "bg-orange-50 border border-orange-300"
            )}
          >
            <img
              src={file.url}
              alt={file.name}
              className="w-8 h-8 object-cover rounded"
            />

            <span className="truncate flex-1">{file.name}</span>

            {/* Delete button – chỉ hiện khi selected */}
            {isSelected && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ❗ không trigger select
                  removeFile(file.id);
                }}
                className="text-gray-400 hover:text-red-500"
                aria-label="Remove file"
              >
                <X size={14} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
