// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDST6Vvb6oAqaCPp3QciFGACBgsPSomxSU",
  authDomain: "dellamovie.firebaseapp.com",
  projectId: "dellamovie",
  storageBucket: "dellamovie.appspot.com",
  messagingSenderId: "1065665266168",
  appId: "1:1065665266168:web:28c0583d966db4393cd60d",
  measurementId: "G-5DS4RQCTEX",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);
