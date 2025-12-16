import { create } from "zustand";
import {
  loginUser,
  signupUser,
  logoutUser,
  onAuthChange,
  getUserProfile,
} from "../firebase/authService";

export const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  /* =====================
     INIT AUTH LISTENER
  ===================== */
  initAuth: () => {
    onAuthChange(async (user) => {
      if (user) {
        const profile = await getUserProfile(user.uid);
        set({ user, profile, loading: false });
      } else {
        set({ user: null, profile: null, loading: false });
      }
    });
  },

  /* =====================
     LOGIN
  ===================== */
  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const user = await loginUser(email, password);
      const profile = await getUserProfile(user.uid);
      set({ user, profile, loading: false });
    } catch (err) {
      set({ error: "Login failed", loading: false });
    }
  },

  /* =====================
     SIGNUP
  ===================== */
  signup: async (data) => {
    try {
      set({ loading: true, error: null });
      const user = await signupUser(data);
      const profile = await getUserProfile(user.uid);
      set({ user, profile, loading: false });
    } catch (err) {
      set({ error: "Signup failed", loading: false });
    }
  },

  /* =====================
     LOGOUT
  ===================== */
  logout: async () => {
    await logoutUser();
    set({ user: null, profile: null });
  },
}));
