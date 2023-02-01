import { Auth, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import { object, string } from "yup";
import { AppContextType } from "../@types/app";
import { FirebaseApp } from "../firebase/firebaseApp";

const AppContext = React.createContext<AppContextType | null>(null);

const MyProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [overlay, setoverlay] = useState<boolean>(false);

  const [fileCard, setfileCard] = useState<boolean>(false);

  const [GlobalUser, setGlobalUser] = useState(null);

  const [arrayImages, setArrayImages] = useState(null);

  return (
    <AppContext.Provider
      value={{
        overlay,
        setoverlay,

        GlobalUser,
        setGlobalUser,

        fileCard,
        setfileCard,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyProvider };
