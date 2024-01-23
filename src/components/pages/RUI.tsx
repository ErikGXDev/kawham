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

function RUIPage() {
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

        <div className="h-64"></div>
      </div>
    </main>
  );
}

export default RUIPage;
