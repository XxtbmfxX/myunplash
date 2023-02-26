import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//it seems that the API key and the others variables are
// not usable for 3rd users that don't own the project

const firebaseConfig = {
  apiKey: "AIzaSyDjJUf4bMo-l8nCPlTZHdXKoD72VzX0SwE",
  authDomain: "unplasgallery.firebaseapp.com",
  databaseURL: "https://unplasgallery-default-rtdb.firebaseio.com",
  projectId: "unplasgallery",
  storageBucket: "unplasgallery.appspot.com",
  messagingSenderId: "468779316533",
  appId: "1:468779316533:web:244f7aaabd8723935c087c",
  measurementId: "G-PFEEHFDBHT",
};

export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
