import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

export const UploadButton = () => {
  const { setoverlay, overlay } = useContext(AppContext);

  const handleButtonClick = () => {
    setoverlay(!overlay);
  };

  return (
    <>
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
