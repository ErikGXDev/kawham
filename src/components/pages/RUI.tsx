import Text from "@components/rui/Text";
import Input from "@components/rui/Input";
import Button from "@components/rui/Button";

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
    </main>
  );
}

export default RUIPage;
