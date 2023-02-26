import * as React from "react";

import { FirebaseApp } from "../firebase/firebase.config.js";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { LoginForm } from "../components/LoginFrom.js";
import { Button } from "flowbite-react";

const auth = getAuth(FirebaseApp);
const googleProvider = new GoogleAuthProvider();
const githuProvider = new GithubAuthProvider();

export const LoginPage: React.FC<{}> = () => {
  return (
    <section className="LoginForm   justify-between ">
      <div className="Loging_forms bg-slate-100 border-2 p-8 rounded-lg text-gray-900 my-6 grid gap-4 ">
        <LoginForm />
        <Button
          type="submit"
          onClick={() => {
            signInWithPopup(auth, googleProvider);
          }}>
          Acceder con Google
        </Button>
        <Button
          onClick={() => {
            signInWithPopup(auth, githuProvider);
          }}
          color="dark">
          Acceder con Github{" "}
        </Button>
      </div>
    </section>
  );
};
