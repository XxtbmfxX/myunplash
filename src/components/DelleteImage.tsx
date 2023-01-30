import React from "react";

type DelleteImageProps = {
  imageId: number;
};

export const DelleteImage = ({ imageId }: DelleteImageProps) => {
  return (
    <button
      onClick={() => console.log("ola")}
      className=" self-end mr-4 absolute bottom-24  bg-red-400 rounded-lg w-16 text-xs hover:text-gray-200">
      Borrar
    </button>
  );
};
