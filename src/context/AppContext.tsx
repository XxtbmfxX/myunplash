import { Auth, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import { object, string } from "yup";
import { FirebaseApp } from "../firebase/firebaseApp";

const auth = getAuth(FirebaseApp);

interface AppContextProps {
  overlay: boolean;
  setoverlay: React.SetStateAction<{}>;
  GlobalUser: null;
  setGlobalUser: React.SetStateAction<{}>;

  auth: object;
  setauth: React.SetStateAction<{}>;
}

const AppContext = createContext<AppContextProps>({
  overlay: false,
  setoverlay: () => {},
  GlobalUser: null,
  setGlobalUser: () => {},

  auth: {},
  setauth: () => {},
});

const MyProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [overlay, setoverlay] = useState(false);
  const [GlobalUser, setGlobalUser] = useState(null);
  const [auth, setauth] = useState<object>({});

  return (
    <AppContext.Provider
      value={{ overlay, setoverlay, GlobalUser, setGlobalUser, auth, setauth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyProvider };
