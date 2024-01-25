import Text from "@components/rui/Text";
import Input from "@components/rui/Input";
import Button from "@components/rui/Button";
import IconButton from "@components/rui/IconButton";

import RunIcon from "@components/rui/icons/Run";
import BugIcon from "@components/rui/icons/Bug";
import BackwardsIcon from "@components/rui/icons/Backwards";
import PauseIcon from "@components/rui/icons/Pause";
import ForwardsIcon from "@components/rui/icons/Forwards";
import Select from "@components/rui/Select";
import Checkbox from "@components/rui/Checkbox";
import Switch from "@components/rui/Switch";
import Collapsible from "@components/rui/Collapsible";
import Modal from "@components/rui/Modal";
import { useState } from "react";
import Gap from "@components/rui/Gap";

function RUIPage() {
  const [showModal, setShowModel] = useState(false);

  return (
    <main className="p-4 flex flex-col gap-4">
      <div>
        <Text variant="header">RUI Testing</Text>
        <Text>A collection of RUI components.</Text>
      </div>

      <div>
        <Text variant="subheader">Text</Text>

        <div className="h-[50px]">
          <Text variant="header">variant="header"</Text>
        </div>

        <div className="h-[50px]">
          <Text variant="subheader">variant="subheader"</Text>
        </div>

        <div className="h-[50px]">
          <Text variant="text">variant="text"</Text>
        </div>

        <div className="h-[50px]">
          <Text variant="small">variant="small"</Text>
        </div>
      </div>

      <div>
        <Text variant="subheader">Input</Text>
        <Input defaultValue={"testing..."} />
      </div>

      <div>
        <Text variant="subheader">Button</Text>
        <div className="flex flex-col gap-3 w-fit">
          <Button variant="filled">filled</Button>
          <Button variant="flat">flat</Button>
          <Button variant="outline">outline</Button>
        </div>
      </div>

      <div>
        <Text variant="subheader">IconButton</Text>
        <div className="flex gap-4">
          <IconButton>
            <RunIcon />
          </IconButton>

          <IconButton>
            <BugIcon />
          </IconButton>

          <IconButton>
            <BackwardsIcon />
          </IconButton>

          <IconButton>
            <PauseIcon />
          </IconButton>

          <IconButton>
            <ForwardsIcon />
          </IconButton>
        </div>
      </div>

      <div>
        <Text variant="subheader">Checkbox</Text>

        <Checkbox />
      </div>

      <div>
        <Text variant="subheader">Switch</Text>

        <Switch />
      </div>

      <div>
        <Text variant="subheader">Collapsible</Text>

        <Collapsible name={<Text variant="subheader">Expand</Text>}>
          <Text variant="subheader">Foo</Text>
          <Text variant="subheader">Bar</Text>
          <Text variant="subheader">Fizz</Text>
          <Text variant="subheader">Buzz</Text>
        </Collapsible>
      </div>

      <div>
        <Text variant="subheader">Select</Text>
        <Select options={["foo", "bar", "fizz", "buzz"]} />
      </div>

      <div>
        <Text variant="subheader">Modal w/ Button</Text>
        <Button
          variant="flat"
          onClick={() => {
            setShowModel(true);
          }}
        >
          Open Modal
        </Button>
        <Modal
          showModal={showModal}
          setShowModal={setShowModel}
          title="Create Project Modal"
        >
          <Text variant="subheader">Project Name</Text>
          <Input defaultValue={"Bean Platformer"} />
          <Text variant="subheader" className="mt-4">
            Template
          </Text>
          <Select options={["Basic", "Platformer", "Bean"]} />
        </Modal>
      </div>

      <div>
        <Text variant="subheader">Gap</Text>
        <Text>direction="vertical"</Text>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <Text variant="text">gapsize="small"</Text>
            <Gap gapsize="small" className="border border-red-600"></Gap>
            <Text variant="text">gapsize="small"</Text>
          </div>
          <div className="flex flex-col">
            <Text variant="text">gapsize="medium"</Text>
            <Gap gapsize="medium" className="border border-red-600"></Gap>
            <Text variant="text">gapsize="medium"</Text>
          </div>
          <div className="flex flex-col">
            <Text variant="text">gapsize="large"</Text>
            <Gap gapsize="large" className="border border-red-600"></Gap>
            <Text variant="text">gapsize="large"</Text>
          </div>
        </div>
        <Text>direction="horizontal"</Text>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row">
            <Text variant="text" className="w-44 text-right">
              gapsize="small"
            </Text>
            <Gap
              gapsize="small"
              direction="horizontal"
              className="border border-red-600"
            ></Gap>
            <Text variant="text">gapsize="small"</Text>
          </div>
          <div className="flex flex-row">
            <Text variant="text" className="w-44 text-right">
              gapsize="medium"
            </Text>
            <Gap
              gapsize="medium"
              direction="horizontal"
              className="border border-red-600"
            ></Gap>
            <Text variant="text">gapsize="medium"</Text>
          </div>
          <div className="flex flex-row">
            <Text variant="text" className="w-44 text-right">
              gapsize="large"
            </Text>
            <Gap
              gapsize="large"
              direction="horizontal"
              className="border border-red-600"
            ></Gap>
            <Text variant="text">gapsize="large"</Text>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RUIPage;
