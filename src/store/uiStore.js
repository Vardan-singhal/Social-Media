import { create } from "zustand";

export const useUIStore = create((set) => ({
  /* =====================
     GLOBAL UI STATES
  ===================== */
  loading: false,
  modal: null, // e.g. "editProfile", "post", "followers"
  modalData: null,

  toast: null, // { type: "success" | "error", message: "" }

  isMobileNavVisible: true,

  activeChatId: null,

  /* =====================
     ACTIONS
  ===================== */

  /* Loader */
  showLoader: () => set({ loading: true }),
  hideLoader: () => set({ loading: false }),

  /* Modal */
  openModal: (name, data = null) =>
    set({ modal: name, modalData: data }),

  closeModal: () =>
    set({ modal: null, modalData: null }),

  /* Toast */
  showToast: (toast) => {
    set({ toast });
    setTimeout(() => set({ toast: null }), 3000);
  },

  clearToast: () => set({ toast: null }),

  /* Mobile Nav */
  hideMobileNav: () => set({ isMobileNavVisible: false }),
  showMobileNav: () => set({ isMobileNavVisible: true }),

  /* Chat */
  setActiveChat: (chatId) =>
    set({ activeChatId: chatId }),

  clearActiveChat: () =>
    set({ activeChatId: null }),
}));
