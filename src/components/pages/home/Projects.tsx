import FolderPicker from "@components/picker/FolderPicker";
import Button from "@components/rui/Button";
import Gap from "@components/rui/Gap";
import Input from "@components/rui/Input";
import Modal from "@components/rui/Modal";
import Text from "@components/rui/Text";
import { useState } from "react";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Text className="font-bold" variant="largeheader">
          Projects
        </Text>
        <div>
          <Button
            variant="filled"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Text variant="text">New +</Text>
          </Button>
        </div>
      </div>

      <a href="/editor">temporary link to editor</a>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Create Project"
      >
        <Text variant="subheader">Project Name</Text>
        <Input placeholder="Bean Platformer" type="text"></Input>
        <Gap gapsize="small"></Gap>
        <Text variant="subheader">Folder Path</Text>
        <FolderPicker></FolderPicker>
        <Gap gapsize="medium"></Gap>
        <div className="flex justify-between">
          <Text>Kawham Version:</Text>
          <Text>0.1.0</Text>
        </div>
        <div className="flex justify-between">
          <Text>Kaboom Version:</Text>
          <Text>3000</Text>
        </div>
        <Gap gapsize="medium"></Gap>
        <Button>Create Project</Button>
      </Modal>
    </div>
  );
}
