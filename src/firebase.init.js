// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_KUdjewAR9zfPrwoPVd4t_N2228-ezo",
  authDomain: "new-muvi-project.firebaseapp.com",
  projectId: "new-muvi-project",
  storageBucket: "new-muvi-project.firebasestorage.app",
  messagingSenderId: "948143990820",
  appId: "1:948143990820:web:de19df7a6baaebfa7a10b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);