import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useFormik } from "formik";

import * as Yup from "yup";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseApp } from "../firebase/firebase.config";
import { AppContextType } from "../@types/app";

type FormValus = {
  description: string;
};
type AddFileCardProps = {
  arrayImages: string;
  setArrayImages: Function;
  email: string;
};

const firestore = getFirestore(FirebaseApp);
const storage = getStorage(FirebaseApp);

export const AddFileCard = ({
  arrayImages,
  setArrayImages,
  email,
}: AddFileCardProps) => {
  const { setfileCard, fileCard } = useContext(AppContext) as AppContextType;

  const [file, setfile] = useState<any>(null);

  let downloadUrl: string;

  // -------------------FILE HANDLER-------------------------------------

  const fileHandler = async () => {
    //detectar file

    const localFile: Blob = file!;

    // //load it to storage
    const fileRef = ref(storage, `documents/${localFile.name}`);
    await uploadBytes(fileRef, localFile);
    //url de descarga
    downloadUrl = await getDownloadURL(fileRef);
    console.log(downloadUrl);
  };

  //-------------HandleAdd--------------------------

  const handleAdd = async (values: FormValus) => {
    await fileHandler();
    if (file !== null) {
      const description = values.description;
      //nuevo array
      const newArrayImages = [
        ...arrayImages,
        {
          id: +new Date(),
          descripcion: description,
          image: downloadUrl,
        },
      ];

      //Update DB
      const docRef = doc(firestore, `usuarios/${email}`);
      updateDoc(docRef, { images: [...newArrayImages] });
      //update State
      setArrayImages(newArrayImages);
    }
  };

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object({
      description: Yup.string()
        .required("This field is required")
        .min(5, "Minimum of 5 max 20 +_+")
        .max(40, "Maximum of 20 +_+"),
    }),
    onSubmit: (values) => {
      handleAdd(values);
    },
  });

  return (
    <section className={`FileCard z-20 ${fileCard ? "flex" : "hidden"}  `}>
      <form className="FileCard_form" onSubmit={formik.handleSubmit}>
        <label htmlFor="description">Descripción</label>
        <input
          id="description"
          type="text"
          className="text-gray-800"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="Login_error">{formik.errors.description}</div>
        ) : null}
        {/* file input */}
        <input
          id="file"
          type="file"
          className="w-5/6"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            const fileItem = e.target.files![0];

            setfile(fileItem);
          }}
        />

        {/* //Submit button */}
        <button
          onClick={() => setfileCard(!fileCard)}
          className="bg-green-300 p-2 rounded-lg text-gray-800 hover:text-yellow-50 "
          type="submit">
          Subir Foto
        </button>
      </form>
    </section>
  );
};
