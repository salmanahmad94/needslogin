// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpyosmzmYlDeDPZbpeMzJfeMeEzkgx3BE",
  authDomain: "immersifieddev.firebaseapp.com",
  projectId: "immersifieddev",
  storageBucket: "immersifieddev.appspot.com",
  messagingSenderId: "434458208257",
  appId: "1:434458208257:web:72110ec626bf96a03a3800",
  measurementId: "G-K2ELNG4DSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);