import { Gallery } from "../components/Gallery";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FirebaseApp } from "../firebase/firebase.config";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { AddFileCard } from "../components/AddFileCard";
import { Header } from "../components/Header";

const auth = getAuth(FirebaseApp);
const firestore = getFirestore(FirebaseApp);

type MainProps = {
  email: string;
};

export const Main = ({ email }: MainProps) => {
  const [arrayImages, setArrayImages] = useState(null);

  const fakeData = [
    {
      id: 1,
      descripcion: "A good description",
      image: "https://picsum.photos/420",
    },
    {
      id: 2,
      descripcion: "A good description",
      image: "https://picsum.photos/320",
    },
    {
      id: 3,
      descripcion: "A good description",
      image: "https://picsum.photos/520",
    },
  ];

  async function buscarDocumentOrCrearDocumento(idDocumento: string) {
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    // buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.images;
    } else {
      // si no existe
      await setDoc(docuRef, { images: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu!.images;
    }
  }

  useEffect(() => {
    async function fetchimages() {
      const imagesFetchadas = await buscarDocumentOrCrearDocumento(email);
      setArrayImages(imagesFetchadas);
    }

    fetchimages();
  }, []);

  return (
    <main className="Main ">
      <Header
        arrayImages={arrayImages}
        setArrayImages={setArrayImages}
        email={email}
      />

      {/* <AddFileCard
        arrayImages={arrayImages!}
        setArrayImages={setArrayImages}
        email={email}
      /> */}
      {arrayImages ? (
        <Gallery
          arrayImages={arrayImages}
          setArrayImages={setArrayImages}
          email={email}
        />
      ) : (
        <h1 className="flex align-middle justify-center">
          Agrega Las imagenes que tu quieras {"ヾ(•ω•`)o"}
          <span className=" ml-4 animate-spin material-symbols-outlined">
            cycle
          </span>
        </h1>
      )}
    </main>
  );
};
