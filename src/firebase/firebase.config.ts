import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//it seems that the API key and the others variables are
// not usable for 3rd users that don't own the project

const firebaseConfig = {
  apiKey: "",
  authDomain: ".firebaseapp.com",
  databaseURL: "default-rtdb.firebaseio.com",
  projectId: "",
  storageBucket: ".appspot.com",
  messagingSenderId: "",
  appId: "1::web:",
  measurementId: "",
};

export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
