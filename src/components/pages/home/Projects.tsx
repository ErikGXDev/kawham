import FolderPicker from "@components/picker/FolderPicker";
import Button from "@components/rui/Button";
import Gap from "@components/rui/Gap";
import Input from "@components/rui/Input";
import Modal from "@components/rui/Modal";
import Text from "@components/rui/Text";
import { ProjectsFile, createProject, getProjects } from "@utils/project";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projectName = useRef<HTMLInputElement>(null);
  const projectPath = useRef<HTMLInputElement>(null);

  const [projects, setProjects] = useState<ProjectsFile>([]);

  useEffect(() => {
    getProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 h-full">
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

        <ul className="border-2 flex-grow border-background-highest rounded-md overflow-hidden">
          {projects.length > 0 && (
            <div className="[&>*:nth-child(odd)]:bg-background-higher rounded-md">
              {projects.map((project) => (
                <li className="p-4 px-6 cursor-pointer hover:brightness-105">
                  {/* Temporary link to editor so I don't have to open devtools everytime */}
                  <Link to="/editor">
                    <Text variant="subheader">{project.name}</Text>
                    <Text foreground="dimmer">{project.path}</Text>
                  </Link>
                </li>
              ))}
            </div>
          )}
          {projects.length == 0 && (
            <div className="w-full h-full flex items-center justify-center text-center p-4">
              <Text>Click the "New +" button to create a new project.</Text>
            </div>
          )}
        </ul>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Create Project"
      >
        <Text variant="subheader">Project Name</Text>
        <Input
          placeholder="Bean Platformer"
          type="text"
          ref={projectName}
        ></Input>
        <Gap gapsize="small"></Gap>
        <Text variant="subheader">Folder Path</Text>
        <FolderPicker ref={projectPath}></FolderPicker>
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
        <Button
          onClick={() => {
            let name = projectName.current!.value;
            let path = projectPath.current!.value;
            console.log(name, path);
            createProject(name, path);
          }}
        >
          Create Project
        </Button>
      </Modal>
    </div>
  );
}
