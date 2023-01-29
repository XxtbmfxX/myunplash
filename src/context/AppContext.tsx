import React, { createContext, useState } from "react";

interface AppContextProps {
  overlay: boolean;
  setoverlay: Function;
  usuarioGlobal: {};
  setusuarioGlobal: Function;
}

const AppContext = createContext<AppContextProps>({
  overlay: false,
  setoverlay: Function,
  usuarioGlobal: {},
  setusuarioGlobal: Function,
});

const MyProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [overlay, setoverlay] = useState(false);
  const [usuarioGlobal, setusuarioGlobal] = useState({});

  return (
    <AppContext.Provider
      value={{ overlay, setoverlay, usuarioGlobal, setusuarioGlobal }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, MyProvider };

//   const fileInputRef = useRef(null);
//   const [file, setFile] = useState(null);

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (event: any): void => {
//     setFile(event.target.files[0]);
//   };
