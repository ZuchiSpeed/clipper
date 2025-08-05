/**
 * Store for managing mobile sidebar state
 * @property {boolean} isOpen - Current open state
 * @method onOpen - Opens the sidebar
 * @method onClose - Closes the sidebar
 */

import { create } from "zustand";

type MobileSidebarStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
