import * as React from "react";
import { useState } from "react";

import { FirebaseApp } from "../firebase/firebase.config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { useFormik } from "formik";

import * as Yup from "yup";

const auth = getAuth(FirebaseApp);
const googleProvider = new GoogleAuthProvider();

export const LoginPage: React.FC<{}> = () => {
  const [Registrando, setRegistrando] = useState(false);

  const handleSubmit = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    if (Registrando) {
      //si se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, email, password);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(10, "At Least 8 characters required ￣へ￣"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <section className="LoginForm h-full ">
      <h1 className="my-4">
        {" "}
        {Registrando ? "Registrate " : "Inicia sesion"}{" "}
      </h1>
      <form className="Login" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" {...formik.getFieldProps("email")} />
        {formik.touched.email && formik.errors.email ? (
          <div className="Login_error">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="Login_error">{formik.errors.password}</div>
        ) : null}

        <button className="bg-green-300 p-2 rounded-lg " type="submit">
          {Registrando ? "Register" : "Inicia Secion"}
        </button>
      </form>
      <div className="Loging_forms my-6 grid gap-4 ">
        <button
          className="bg-blue-300 p-2 rounded-lg "
          type="submit"
          onClick={() => signInWithRedirect(auth, googleProvider)}>
          Acceder con Google
        </button>
        <button
          className="bg-blue-300 p-2 rounded-lg "
          type="submit"
          onClick={() => setRegistrando(!Registrando)}>
          {Registrando
            ? "Ya tienes cuenta? inicia sesion"
            : "No tienes cuenta? Registrate"}
        </button>
      </div>
    </section>
  );
};
