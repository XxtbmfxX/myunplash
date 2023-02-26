import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useFormik } from "formik";

import * as Yup from "yup";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { FirebaseApp } from "../firebase/firebase.config";
import { AppContextType } from "../@types/app";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

type AddFileCardProps = {
  arrayImages: Object;
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

  const [file, setFile] = useState<File | null>(null);
  const handleChange = (file: any) => {
    setFile(file);
  };

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
  };

  //-------------HandleAdd--------------------------

  const handleAdd = async (values: { description: string }) => {
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
        .min(5, "Minimum of 5 max 40 +_+")
        .max(40, "Maximum of 40 +_+"),
    }),
    onSubmit: (values) => {
      handleAdd(values);
    },
  });

  return (
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
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

      {/* //Submit button */}
      <button
        onClick={() => setfileCard(!fileCard)}
        className="bg-green-300 p-2 rounded-lg text-gray-800 hover:text-yellow-50 "
        type="submit">
        Subir Foto
      </button>
    </form>
  );
};
