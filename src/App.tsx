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
        className="App   flex flex-col items-center
      w-full min-h-screen bg-slate-900 text-gray-800  ">
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
