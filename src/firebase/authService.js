import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app } from "./firebaseConfig";
import { db } from "./firebaseConfig";

const auth = getAuth(app);

/* ============================
   SIGN UP
============================ */
export const signupUser = async ({
  email,
  password,
  username,
  avatarUrl = "",
}) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  // Update Firebase Auth profile
  await updateProfile(user, {
    displayName: username,
    photoURL: avatarUrl,
  });

  // Create Firestore user document
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    username,
    email,
    avatar: avatarUrl,
    bio: "",
    followers: [],
    following: [],
    createdAt: serverTimestamp(),
  });

  return user;
};

/* ============================
   LOGIN
============================ */
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

/* ============================
   LOGOUT
============================ */
export const logoutUser = async () => {
  await signOut(auth);
};

/* ============================
   AUTH STATE LISTENER
============================ */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/* ============================
   GET USER PROFILE (Firestore)
============================ */
export const getUserProfile = async (uid) => {
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    throw new Error("User not found");
  }

  return snap.data();
};

/* ============================
   UPDATE USER PROFILE
============================ */
export const updateUserProfile = async (uid, data) => {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, data, { merge: true });
};
