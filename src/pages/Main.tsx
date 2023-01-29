import { getAuth, signOut } from "firebase/auth";
import { FirebaseApp } from "../firebase/firebaseApp";

const auth = getAuth(FirebaseApp);

export const Main = () => {
  return (
    <div className="Main">
      <h1>Main Compoent session start</h1>
      <button
        onClick={() => {
          signOut(auth);
          console.log("cerrado");
        }}>
        Cerrar Sesion
      </button>
    </div>
  );
};
