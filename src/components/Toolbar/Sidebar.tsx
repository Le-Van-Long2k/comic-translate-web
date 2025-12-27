import { IconButton, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdHome, MdSettings, MdUploadFile, MdSave } from "react-icons/md";
import { useUploadStore } from "../../store/uploadStore";
import { v4 as uuid } from "uuid";
import type { UploadedFile } from "../../types/file";

function Sidebar() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const addFiles = useUploadStore((state) => state.addFiles);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const allowedExtensions = ["jpg", "jpeg", "png", "webp"];

    const filesArray = Array.from(e.target.files);

    const validFiles = filesArray.filter((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      return (
        allowedTypes.includes(file.type) &&
        ext &&
        allowedExtensions.includes(ext)
      );
    });

    if (validFiles.length === 0) {
      alert("Chỉ được chọn file ảnh: JPG, JPEG, PNG, WEBP");
      return;
    }

    const existingFiles = useUploadStore.getState().files;

    const newFiles: UploadedFile[] = validFiles
      .filter((file) => !existingFiles.some((f) => f.name === file.name))
      .map((file) => ({
        id: uuid(),
        name: file.name,
        file,
        url: URL.createObjectURL(file),
      }));

    if (newFiles.length === 0) {
      alert("Các file bạn chọn đã tồn tại tên!");
      return;
    }

    addFiles(newFiles);

    e.target.value = "";
  };

  return (
    <VStack gap="8" h="100%" justify="flex-start">
      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".jpg,.jpeg,.png,.webp"
        multiple
        onChange={handleFileChange}
      />
      <IconButton aria-label="Home" variant="outline" size="xl" mt={5}>
        <MdHome />
      </IconButton>
      <IconButton
        aria-label="UploadFile"
        variant="outline"
        size="xl"
        onClick={handleUploadClick}
      >
        <MdUploadFile />
      </IconButton>
      <IconButton aria-label="Save" variant="outline" size="xl">
        <MdSave />
      </IconButton>
      <IconButton aria-label="Settings" variant="outline" size="xl">
        <MdSettings />
      </IconButton>
    </VStack>
  );
}

export default Sidebar;
