import { ImgCard } from "./ImgCard";

import Overlay from "./Overlay";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

type Gallery = {
  imageList: Array<object>;
};

export const Gallery = ({ imageList }: Gallery) => {
  return (
    <div id="outer-container" className="Gallery grid grid-cols-3 gap-4 w-5/6 ">
      {imageList &&
        imageList.map((image: any) => <ImgCard key={image.id} image={image} />)}
    </div>
  );
};
