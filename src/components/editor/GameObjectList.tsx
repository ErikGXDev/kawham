import Collapsible from "@components/rui/Collapsible";
import Text from "@components/rui/Text";
import ArrowDown from "@components/rui/icons/ArrowDown";
import ArrowRight from "@components/rui/icons/ArrowRight";
import { cn } from "@utils/cn";

interface GameObject {
  name: string;
  children: GameObject[];
}

function getChildCount(object: GameObject): number {
  return object.children.length > 0
    ? object.children.map(getChildCount).reduce((l, r) => l + r, 0) +
        object.children.length
    : 0;
}

function GameObjectNode({
  object,
  index,
  level,
  globalIndex,
}: {
  object: GameObject;
  index: number;
  level: number;
  globalIndex: number;
}) {
  const paddingLeft = level * 30 + 16;

  if (object.children.length > 0)
    return (
      <Collapsible
        header={<Text>{object.name}</Text>}
        classNameContent="pl-0"
        classNameHeader={cn(
          "p-2 w-full",
          globalIndex % 2 === 1 && "bg-background-higher",
          index !== 0 && "border-t-2 border-background-highest",
        )}
        style={{ paddingLeft }}
        iconExpanded={
          <ArrowDown
            width={16}
            height={16}
            className="pointer-events-none text-background-highest"
          />
        }
        iconCollapsed={
          <ArrowRight
            width={16}
            height={16}
            className="pointer-events-none text-background-highest"
          />
        }
      >
        <div className="w-full border-t-2 border-background-highest"></div>
        {object.children.map((child, i) => (
          /* Child inherits background color */
          <GameObjectNode
            object={child}
            index={i}
            globalIndex={globalIndex + i + 1}
            level={level + 1}
          />
        ))}
      </Collapsible>
    );

  return (
    <div
      style={{ paddingLeft }}
      className={cn(
        "p-2",
        globalIndex % 2 === 1 && "bg-background-higher",
        index !== 0 && "border-t-2 border-background-highest",
      )}
    >
      <Text>{object.name}</Text>
    </div>
  );
}

export default function GameObjectList() {
  const testData: GameObject[] = [
    {
      name: "Bean",
      children: [],
    },
    {
      name: "Level",
      children: [
        {
          name: "Block",
          children: [],
        },
        {
          name: "Block",
          children: [],
        },
        {
          name: "Block",
          children: [],
        },
      ],
    },
    {
      name: "More",
      children: [
        {
          name: "Nesting",
          children: [
            {
              name: "Test",
              children: [],
            },
          ],
        },
      ],
    },
  ];

  let globalIndex = 0;

  return (
    <>
      {testData.map((obj, i) => (
        <GameObjectNode
          globalIndex={
            i !== 0
              ? (globalIndex += getChildCount(testData[i - 1])) + i
              : globalIndex + i
          }
          object={obj}
          index={i}
          level={0}
        />
      ))}
      <div className="w-full border-t-2 border-background-highest"></div>
    </>
  );
}
