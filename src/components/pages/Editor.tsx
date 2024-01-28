import GameObjectList from "@components/editor/GameObjectList";
import FileViewer from "@components/editor/FileViewer";
import Sidebar from "@components/sidebar/Sidebar";
import "@scss/Editor.scss";
import Text from "@components/rui/Text";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function useSearch() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Editor() {
  const search = useSearch();
  const projectPath = search.get("path");

  if (projectPath === null)
    return (
      <div className="h-screen flex overflow-hidden items-center justify-center">
        <Text variant="largeheader" className="animate-bounce">
          Loading
        </Text>
      </div>
    );

  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar max={500} axis="x" className="overflow-hidden">
        <GameObjectList />
      </Sidebar>
      <div className="grow flex flex-col h-screen">
        <Sidebar max={900} axis="y" className="overflow-hidden">
          <h1>Stacked 1</h1>
        </Sidebar>
        <div className="grow overflow-hidden">
          <FileViewer rootPath={projectPath} />
        </div>
      </div>
      <Sidebar
        max={500}
        axis="x"
        separatorPosition="before"
        className="overflow-hidden"
        reverse
      >
        <h1>Test</h1>
      </Sidebar>
    </div>
  );
}
