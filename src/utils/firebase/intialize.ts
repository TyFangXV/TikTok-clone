// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTEzl8eRjSUv7m-uHu3X8XELOvS0lAY9E",
  authDomain: "tik-tok-clone-expo.firebaseapp.com",
  projectId: "tik-tok-clone-expo",
  storageBucket: "tik-tok-clone-expo.appspot.com",
  messagingSenderId: "5948702171",
  appId: "1:5948702171:web:d12e48a5072d0287d6fbfe",
  measurementId: "G-W5041RB40D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);