import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

export const UploadButton = () => {
  const { setoverlay, overlay } = useContext(AppContext);

  const handleButtonClick = () => {
    setoverlay(!overlay);
  };

  return (
    <>
      <button
        className="p-2 rounded-lg bg-green-300 border-2 border-green-500 hover:text-white  "
        onClick={handleButtonClick}>
        Add a photo
      </button>
      {/* <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {file && <img src={URL.createObjectURL(file)} alt="uploaded" />} */}
    </>
  );
};
