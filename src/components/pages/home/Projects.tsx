import Button from "@components/rui/Button";
import Modal from "@components/rui/Modal";
import Text from "@components/rui/Text";
import { useState } from "react";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Text className="font-bold" variant="largeheader">
          Projects
        </Text>
        <Button
          variant="filled"
          className="px-12 h-16"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Text variant="header">New +</Text>
        </Button>
      </div>

      <a href="/editor">temporary link to editor</a>

      <Modal
        showModal={showModal}
        setShowModel={setShowModal}
        title="Create Project"
      >
        <Text>Hello!</Text>
      </Modal>
    </div>
  );
}
