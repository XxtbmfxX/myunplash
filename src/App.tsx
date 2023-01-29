import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { AppContext, MyProvider } from "./context/AppContext";
import { FirebaseApp } from "./firebase/firebaseApp";
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { Main } from "./pages/Main";

const auth = getAuth(FirebaseApp);

function App() {
  // const { usuarioGlobal, setusuarioGlobal } = useContext(AppContext);

  const [usuarioGlobal, setusuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (FireUser: any) => {
    if (FireUser) {
      //session on the shoe this

      setusuarioGlobal(FireUser);
    } else {
      setusuarioGlobal(null);
    }
  });

  return (
    <div
      className="App  flex flex-col items-center
      w-full min-h-screen bg-slate-900 text-yellow-50  ">
      <Header />
      {usuarioGlobal ? <Main /> : <LoginPage />}
      {/* <MyProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MyProvider> */}
    </div>
  );
}

export default App;
