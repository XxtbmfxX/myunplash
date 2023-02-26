import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToggleSwitch } from "flowbite-react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FirebaseApp } from "../firebase/firebase.config";

const auth = getAuth(FirebaseApp);

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be  at least 8 characters ")
        .required("Required"),
    }),
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password);
    },
  });
  return (
    <form className="grid gap-4 " onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email </label>
      <input
        className="p-4 rounded-lg border-2 active:border-gray-800 "
        id="email"
        type="email"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        className="p-4 rounded-lg border-2 active:border-gray-800 "
        id="password"
        type="password"
        {...formik.getFieldProps("password")}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-500">{formik.errors.password}</div>
      ) : null}

      <button
        className="bg-green-400 p-4 rounded-lg text-white active:bg-green-500"
        type="submit">
        Log in
      </button>
    </form>
  );
};
