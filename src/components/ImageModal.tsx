import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AddFileCard } from "./AddFileCard";
import DragAndDrop from "./DragAndDrop";
import { LoginForm } from "./LoginFrom";

type ImageModal = {
  arrayImages: object | null;
  setArrayImages: Function;
  email: string;
};

export default function ImageModal({
  arrayImages,
  setArrayImages,
  email,
}: ImageModal) {
  const [modal, setmodal] = useState(false);
  return (
    <div>
      {" "}
      <Button onClick={() => setmodal(!modal)}>Add image</Button>
      <Modal
        className="h-screen pt-20 dark:text-yellow-50"
        show={modal}
        onClose={() => setmodal(!modal)}>
        <Modal.Header>
          Upload any image <br />
          （。＾▽＾）
        </Modal.Header>
        <Modal.Body>
          <AddFileCard
            arrayImages={arrayImages}
            setArrayImages={setArrayImages}
            email={email}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
