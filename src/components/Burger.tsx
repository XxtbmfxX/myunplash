import { getAuth, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { AppContextType } from "../@types/app";
import { AppContext } from "../context/AppContext";
import { FirebaseApp } from "../firebase/firebase.config";

const auth = getAuth(FirebaseApp);

export const Burger = () => {
  const { setfileCard, fileCard } = useContext(AppContext) as AppContextType;

  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
    setfileCard(false);
  };

  const handleAdd = () => {
    setfileCard(!fileCard);
  };

  return (
    <div className="text-gray-800">
      <span
        className="material-symbols-outlined cursor-pointer text-gray-50  "
        onClick={toggleMenu}>
        Menu
      </span>
      <div className={state ? "Navigation" : `hidden`}>
        <section className=" Search_input flex mb-2 ">
          <span className="material-symbols-outlined bg-slate-100 rounded-full p-2 mr-2 cursor-pointer  ">
            search
          </span>
          <input
            className="rounded-lg focus:outline-none p-2"
            placeholder="Search by name"
            type="text"
          />
        </section>
        {/* UPLOAD BUTON */}

        <button
          className="p-2 rounded-lg bg-green-300 border-2 border-green-500 hover:text-white  "
          onClick={handleAdd}>
          Add a photo
        </button>
        <button
          className="my-4 hover:underline text-red-400 "
          onClick={() => {
            signOut(auth);
            setfileCard(false);
          }}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
};
