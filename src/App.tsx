import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import { Header } from "./components/Header";
import { AppContext, MyProvider } from "./context/AppContext";
import { FirebaseApp } from "./firebase/firebase.config";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/Main";

const auth = getAuth(FirebaseApp);

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

function App() {
  // setauth(auth);

  const [usuarioGlobal, setusuarioGlobal] = useState<any>(null);

  onAuthStateChanged(auth, (FireUser: any) => {
    if (FireUser) {
      //session on then show this

      setusuarioGlobal(FireUser);
      // usuarioGlobal(FireUser);
    } else {
      setusuarioGlobal(null);
      // setGlobalUser(null);
    }
  });

  return (
    <MyProvider>
      <div
        className="App  flex flex-col 
      w-full min-h-screen text-gray-800  ">
        {usuarioGlobal ? (
          <Routes>
            <Route path="/" element={<Main email={usuarioGlobal?.email} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <LoginPage />
        )}
      </div>
    </MyProvider>
  );
}

export default App;
