// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxumyomzHPFz0ZPh46NCc9tkOhBYZyMD4",
  authDomain: "memeweb-96534.firebaseapp.com",
  projectId: "memeweb-96534",
  storageBucket: "memeweb-96534.appspot.com",
  messagingSenderId: "574314345794",
  appId: "1:574314345794:web:284d73d7213cbe7b04c4db",
  measurementId: "G-8TRN9W3T16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)