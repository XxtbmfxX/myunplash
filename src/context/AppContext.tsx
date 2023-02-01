import { Auth, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import { object, string } from "yup";
import { FirebaseApp } from "../firebase/firebaseApp";

const auth = getAuth(FirebaseApp);

interface AppContextProps {}

const AppContext = createContext<AppContextProps>({});

const MyProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [overlay, setoverlay] = useState(false);
  const [fileCard, setfileCard] = useState(false);
  const [GlobalUser, setGlobalUser] = useState(null);
  const [auth, setauth] = useState<object>({});
  const [arrayImages, setArrayImages] = useState(null);

  return (
    <AppContext.Provider
      value={{
        overlay,
        setoverlay,
        GlobalUser,
        setGlobalUser,
        auth,
        setauth,
        fileCard,
        setfileCard,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyProvider };
