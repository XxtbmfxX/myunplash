import { ImgCard } from "./ImgCard";

import Overlay from "./Overlay";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

type Gallery = {
  arrayImages: Array<object>;
  setArrayImages: Function;
  email: string;
};

export const Gallery = ({ arrayImages, setArrayImages, email }: Gallery) => {
  return (
    <div className="Gallery w-full p-4 grid grid-cols-1 sm:grid-cols-3  gap-4  ">
      {arrayImages &&
        arrayImages.map((image: any) => (
          <ImgCard
            key={image.id}
            image={image}
            setArrayImages={setArrayImages}
            arrayImages={arrayImages}
            email={email}
          />
        ))}
      {arrayImages.length === 0 && (
        <>
          <h1 className="w-52 flex flex-col ">No images</h1>
          <span className="block">{"o((⊙﹏⊙))o."} </span>
          <span className="block">{"（*゜ー゜*）"} </span>
        </>
      )}
    </div>
  );
};
