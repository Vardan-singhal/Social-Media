import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* ============================
   Firebase Configuration
============================ */
const firebaseConfig = {
  apiKey: "AIzaSyAL8K3y7mKvHpDPW62xIwiPjxrcG16vHek",
  authDomain: "social-media-cee0a.firebaseapp.com",
  projectId: "social-media-cee0a",
  storageBucket: "social-media-cee0a.firebasestorage.app",
  messagingSenderId: "693716067118",
  appId: "1:693716067118:web:dd4db543c1f4bded8310bf",
  measurementId: "G-8E6G26YMPM"
};

/* ============================
   Initialize Firebase
============================ */
export const app = initializeApp(firebaseConfig);

/* ============================
   Firebase Services
============================ */
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
