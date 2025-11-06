// Import the functions you need from the SDKs you need
import exp from "constants";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7WIQWgGqs0R3HUD93XSWHzo2WbgpdBE",
  authDomain: "bookexchange-44481.firebaseapp.com",
  projectId: "bookexchange-44481",
  storageBucket: "bookexchange-44481.firebasestorage.app",
  messagingSenderId: "1022108755711",
  appId: "1:1022108755711:web:510921876b7266cf8f0eca",
  measurementId: "G-3FTV08DR34"
};

// Initialize Firebase
let firebase_app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export default firebase_app;

export const auth = getAuth(firebase_app);

export const storage = getStorage(firebase_app);

export const db = getFirestore(firebase_app);