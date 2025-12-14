import { create } from "zustand";

interface PanelStore {
  showSettings: boolean;
  toggleSettings: () => void;
  toggleHome: () => void;
}

export const usePanelStore = create<PanelStore>((set) => ({
  showSettings: false,
  toggleSettings: () =>
    set((state) => ({
      showSettings: !state.showSettings,
    })),
  toggleHome: () =>
    set(() => ({
      showSettings: false,
    })),

}));
