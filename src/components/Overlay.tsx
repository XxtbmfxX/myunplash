import React, { useState } from "react";

type DragOverImage = {
  src: string;
};
const DragOverImage: React.FC<DragOverImage> = ({ src }) => {
  const [dragOver, setDragOver] = useState(false);

  const handleDragEnter = (e: any) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <div
      className={`relative rounded-md overflow-hidden ${
        dragOver ? "bg-gray-200" : "bg-white"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}>
      <img src={src} className="object-cover h-64 w-full" alt="" />
    </div>
  );
};

export default DragOverImage;
