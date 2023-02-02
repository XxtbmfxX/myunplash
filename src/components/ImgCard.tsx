import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { FirebaseApp } from "../firebase/firebase.config";

type ImageObject = {
  id: number;
  image: string;
  descripcion: string;
};

type ImgCardProps = {
  image: ImageObject;
  setArrayImages: Function;
  email: string;
  arrayImages: Array<Object>;
};

const firestore = getFirestore(FirebaseApp);

export const ImgCard = ({
  image,
  setArrayImages,
  email,
  arrayImages,
}: ImgCardProps) => {
  const [description, setdescription] = useState(false);

  const handleDelete = (imageId: number) => {
    //New Array
    const newArrayImages = arrayImages.filter(
      (image: any) => image.id !== imageId
    );

    //Update DB
    const docRef = doc(firestore, `usuarios/${email}`);
    updateDoc(docRef, { images: [...newArrayImages] });
    //Update state
    setArrayImages(newArrayImages);
  };

  return (
    <div
      onMouseEnter={() => setdescription(true)}
      onMouseLeave={() => {
        setdescription(false);
      }}
      className={`ImgCard relative ${description && "shadow-2xl"} `}>
      <img
        src={image.image}
        className="w-full h-full object-cover rounded-lg"
        alt="your-image"
      />
      <div
        className={`Description flex ${
          description === true ? "flex" : "hidden"
        } `}>
        {" "}
      </div>
      <div
        className={`Description_text ${
          description === true ? "flex  " : "hidden"
        } `}>
        {/* //Dellete button */}
        <button
          onClick={() => handleDelete(image.id)}
          className=" self-end  bg-red-400 mt-4 rounded-lg w-16 text-xs hover:text-gray-200 mr-2">
          Borrar
        </button>
        <span className="w-3/4 truncate ">{image.descripcion} </span>
      </div>
    </div>
  );
};
