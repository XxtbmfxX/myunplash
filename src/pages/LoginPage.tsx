import * as React from "react";

import { FirebaseApp } from "../firebase/firebase.config.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const auth = getAuth(FirebaseApp);
const googleProvider = new GoogleAuthProvider();

export const LoginPage: React.FC<{}> = () => {
  return (
    <section className="LoginForm mt-52 h-52 justify-between ">
      <div className="Loging_forms my-6 grid gap-4 ">
        <button
          className={`bg-blue-300 p-2 rounded-lg animate-pulse hover:animate-none `}
          type="submit"
          onClick={() => {
            signInWithRedirect(auth, googleProvider);
          }}>
          Acceder con Google
        </button>
      </div>
    </section>
  );
};
