// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhBr0t8bcgna-9ZrgGkLpQxpWXrsQF3So",
  authDomain: "resume-ats-1d363.firebaseapp.com",
  projectId: "resume-ats-1d363",
  appId: "1:985187506067:web:a10197217fbb7bd9617a66",
  // add other fields if needed
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
