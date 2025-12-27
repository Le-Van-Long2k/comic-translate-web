import { useUploadStore } from "../../store/uploadStore";
import { Stack } from "@chakra-ui/react";
import ImageFileItem from "./ImageFileItem";

export default function ImageFileList() {
  const files = useUploadStore((s) => s.files);
  const selectedFileId = useUploadStore((s) => s.selectedFileId);
  const selectFile = useUploadStore((s) => s.selectFile);
  const removeFile = useUploadStore((s) => s.removeFile);

  if (files.length === 0) {
    return <div className="p-4 text-gray-400 text-sm">No files uploaded</div>;
  }

  return (
    <Stack gap={2} w="100%" h="100%" overflowY="auto">
      {files.map((file) => (
        <ImageFileItem
          key={file.id}
          src={file.url}
          name={file.name}
          selected={file.id === selectedFileId}
          onClick={() => selectFile(file.id)}
          onDelete={() => removeFile(file.id)}
        ></ImageFileItem>
      ))}
    </Stack>
  );
}
