import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZhS0DU_zeOvODDG5SDV7gtZr_PpUfP5A",
  authDomain: "ghost-in-the-chat.firebaseapp.com",
  projectId: "ghost-in-the-chat",
  storageBucket: "ghost-in-the-chat.appspot.com",
  messagingSenderId: "1075846381011",
  appId: "1:1075846381011:web:6a33299631267c00f6c326",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
