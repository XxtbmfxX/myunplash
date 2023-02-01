// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apikey = "AIzaSyDjJUf4bMo-l8nCPlTZHdXKoD72VzX0SwE";

const firebaseConfig = {
  apiKey: apikey,
  authDomain: "unplasgallery.firebaseapp.com",
  databaseURL: "https://unplasgallery-default-rtdb.firebaseio.com",
  projectId: "unplasgallery",
  storageBucket: "unplasgallery.appspot.com",
  messagingSenderId: "468779316533",
  appId: "1:468779316533:web:244f7aaabd8723935c087c",
  measurementId: "G-PFEEHFDBHT",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
