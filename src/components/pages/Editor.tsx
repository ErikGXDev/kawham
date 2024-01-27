import GameObjectList from "@components/editor/GameObjectList";
import Sidebar from "@components/sidebar/Sidebar";
import "@scss/Editor.scss";

export default function Editor() {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar max={500} axis="x" className="overflow-hidden">
        <GameObjectList />
      </Sidebar>
      <div className="grow flex flex-col h-screen">
        <Sidebar max={500} axis="y" className="overflow-hidden">
          <h1>Stacked 1</h1>
        </Sidebar>
        <div className="grow overflow-hidden">
          <h1>Stacked 2</h1>
        </div>
      </div>
      <Sidebar max={500} axis="x" separatorPosition="before" className="overflow-hidden" reverse>
        <h1>Test</h1>
      </Sidebar>
    </div>
  );
}
