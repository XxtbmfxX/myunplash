import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { FirebaseApp } from "../firebase/firebaseApp";
import { UploadButton } from "./UploadButton";

const auth = getAuth(FirebaseApp);

export const Burger = () => {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
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

        <UploadButton />
        <button
          className="my-4 hover:underline text-red-400 "
          onClick={() => {
            signOut(auth);
          }}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
};
