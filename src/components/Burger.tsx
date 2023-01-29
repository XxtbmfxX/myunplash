import { useState } from "react";
import { UploadButton } from "./UploadButton";

export const Burger = () => {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
  };
  return (
    <div>
      <span
        className="material-symbols-outlined cursor-pointer "
        onClick={toggleMenu}>
        Menu
      </span>
      <div
        className={
          state
            ? "  flex items-center flex-col absolute right-10 top-16 bg-gray-200 rounded-lg p-3  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300   "
            : `hidden`
        }>
        <div className="flex mb-2 ">
          <span className="material-symbols-outlined bg-slate-100 rounded-full p-2 mr-2 cursor-pointer hover:border-gray-700 hover:border-2 ">
            search
          </span>
          <input
            className="rounded-lg focus:outline-none p-2"
            placeholder="Search by name"
            type="text"
          />
        </div>

        <UploadButton />
      </div>
    </div>
  );
};
