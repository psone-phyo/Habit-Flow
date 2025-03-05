// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
    apiKey: "AIzaSyAILIdePE_EyFnwu_49l4myN7CwVM6cKMg",
    authDomain: "habitify-484ef.firebaseapp.com",
    projectId: "habitify-484ef",
    storageBucket: "habitify-484ef.firebasestorage.app",
    messagingSenderId: "1068298720272",
    appId: "1:1068298720272:web:de9f7a29937a501e802695",
    measurementId: "G-GSSTFM43HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function for Google Sign-In
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Signed In:", result.user);
    alert(`Welcome, ${result.user.displayName}!`);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    alert("Failed to Sign In with Google");
  }
};

// Function for Google Sign-Out
const signOutUser = async () => {
  try {
    await signOut(auth);
    alert("Signed out successfully");
  } catch (error) {
    console.error("Sign Out Error:", error);
  }
};

export { auth, signInWithGoogle, signOutUser };
