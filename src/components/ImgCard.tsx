import { useEffect, useRef, useState } from "react";
import { DelleteImage } from "./DelleteImage";

type ImageObject = {
  id: number;
  image: string;
  descripcion: string;
};

type ImgCard = {
  image: ImageObject;
  // imageRef: React.MutableRefObject<null>;
  // height:string;
};

export const ImgCard = ({ image }: ImgCard) => {
  const [description, setdescription] = useState(false);

  return (
    <div
      onMouseEnter={() => setdescription(true)}
      onMouseLeave={() => {
        setdescription(false);
      }}
      className="ImgCard relative">
      <img
        src={image.image}
        className="w-full h-full object-cover rounded-lg"
        alt="your-image"
      />
      <div
        className={`Description  ${description === true ? "flex" : "hidden"} `}>
        {" "}
      </div>
      <div
        className={`Description_text h-full w-full flex-col justify-end  ${
          description === true ? "flex  " : "hidden"
        } `}>
        <DelleteImage imageId={image.id} />
        <span className="w-2/3 h-10  ">{image.descripcion} </span>
      </div>
    </div>
  );
};
