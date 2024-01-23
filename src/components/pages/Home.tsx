import Sidebar from "@components/sidebar/Sidebar";
import "@scss/Home.scss";
import { cn } from "@utils/cn";
import { useState } from "react";
import Projects from "./home/Projects";
import Learn from "./home/Learn";
import Settings from "./home/Settings";

export default function Home() {
  const pages = ["Projects", "Learn", "Settings"];
  const [activePage, setActivePage] = useState("Projects");

  return (
    <div className="flex">
      <aside className="h-screen">
        <Sidebar axis="x" min={333} max={600}>
          <div className="p-16 flex flex-col gap-12">
            <h1 className="text-5xl font-bold">Kawham</h1>
            {pages.map((page) => (
              <a
                href="#"
                onClick={() => {
                  setActivePage(page);
                }}
                className={cn(
                  "text-3xl hover:underline",
                  activePage == page
                    ? "text-primary-higher"
                    : "text-foreground-default"
                )}
              >
                {page}
              </a>
            ))}
          </div>
        </Sidebar>
      </aside>
      <div className="content p-16 flex gap-12">
        {activePage == "Projects" && <Projects></Projects>}
        {activePage == "Learn" && <Learn></Learn>}
        {activePage == "Settings" && <Settings></Settings>}
      </div>
    </div>
  );
}
