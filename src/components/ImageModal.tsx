import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { AddFileCard } from "./AddFileCard";
import DragAndDrop from "./DragAndDrop";
import { LoginForm } from "./LoginFrom";

type ImageModal = {
  arrayImages: Array<object | null>;
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
      <Modal show={modal} onClose={() => setmodal(!modal)}>
        <Modal.Header>Upload any image （。＾▽＾）</Modal.Header>
        <Modal.Body>
          <AddFileCard
            arrayImages={arrayImages}
            setArrayImages={setArrayImages}
            email={email}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setmodal(false)}>aceptar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
