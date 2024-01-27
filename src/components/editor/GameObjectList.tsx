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
  if (object.children.length === 0) return 0;

  let childCount = 0;
  const queue: GameObject[] = [object];

  while (queue.length > 0) {
    const top = queue.pop()!;

    childCount += top.children.length;
    for (const child of top.children) queue.push(child);
  }

  return childCount;
}

const ICON_CENTER_OFFSET = 7;
const PADDING_PER_LEVEL = 30;
const PADDING_INITIAL = 16;

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
  const paddingLeft = level * PADDING_PER_LEVEL + PADDING_INITIAL;
  const nestingMarkers =
    level !== 0 &&
    Array.from(new Array(level), (_, i) => (
      <div
        style={{
          left: i * PADDING_PER_LEVEL + PADDING_INITIAL + ICON_CENTER_OFFSET,
        }}
        className="absolute top-0 h-full w-0.5 bg-background-highest"
      ></div>
    ));

  if (object.children.length > 0)
    return (
      <Collapsible
        header={
          <>
            {nestingMarkers}
            <Text>{object.name}</Text>
          </>
        }
        classNameContent="!pl-0"
        classNameHeader={cn(
          "p-2 w-full relative",
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
        "p-2 relative",
        globalIndex % 2 === 1 && "bg-background-higher",
        index !== 0 && "border-t-2 border-background-highest",
      )}
    >
      {nestingMarkers}
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
              children: [
                {
                  name: "Even",
                  children: [
                    {
                      name: "More",
                      children: [
                        {
                          name: "Nesting",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
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
