import { create } from "zustand";
import type { UploadedFile } from "../types/file";

interface UploadState {
  files: UploadedFile[];
  addFiles: (files: UploadedFile[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
  selectedFileId: string | null;
  selectFile: (id: string) => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  files: [],
  selectedFileId: null,

  addFiles: (fileName) =>
    set((state) => ({
      files: [...state.files, ...fileName],
    })),
  removeFile: (id) =>
    set((state) => ({
      files: state.files.filter((f) => f.id !== id),
      selectedFileId:
        state.selectedFileId === id ? null : state.selectedFileId
    })),
  clearFiles: () => set({ files: [] }),
  selectFile: (id) => set({ selectedFileId: id })
}));
