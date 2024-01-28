import * as fs from "@tauri-apps/api/fs";
import { watch } from "tauri-plugin-fs-watch-api";
import { FileEntry } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import Folder from "@components/rui/icons/Folder";
import File from "@components/rui/icons/File";
import Text from "@components/rui/Text";
import Refresh from "@components/rui/icons/Refresh";
import { join } from "@tauri-apps/api/path";
import { shell } from "@tauri-apps/api";

const fileIcons: Record<string, (props: { className: string }) => JSX.Element> =
  {};

const extname = (path: string): string | null =>
  path.lastIndexOf(".") !== -1 ? path.substring(path.lastIndexOf(".")) : null;

function FileViewerFile({
  entry,
  handleFileClick,
  isBack,
}: {
  entry: FileEntry;
  handleFileClick: (entry: FileEntry) => void;
  isBack: boolean;
}) {
  const fileExt = extname(entry.name!);
  const FileIcon = isBack
    ? Folder
    : fileExt && fileExt in fileIcons
    ? fileIcons[fileExt]
    : entry.children
    ? Folder
    : File;

  return (
    <div
      className="p-2 flex flex-col w-24 items-center cursor-pointer"
      onClick={() => handleFileClick(entry)}
    >
      <div className="h-16 flex items-center justify-center">
        <FileIcon className="w-12 h-12 text-background-highest" />
      </div>
      <Text
        variant="small"
        className="select-none overflow-hidden max-h-4 break-all"
      >
        {entry.name}
      </Text>
    </div>
  );
}

export default function FileViewer({ rootPath }: { rootPath: string }) {
  const [projectFiles, setProjectFiles] = useState<FileEntry[]>([]);
  const [browsedFiles, setBrowsedFiles] = useState<FileEntry[]>([]);
  const [path, setPath] = useState<string[]>([]);

  async function refreshFiles() {
    setProjectFiles(await fs.readDir(rootPath, { recursive: true }));
  }

  function refreshBrowsedFiles(path: string[]) {
    let root = projectFiles;

    for (let i = 0; i < path.length; i++) {
      const node = root.find((entry) => entry.name === path[i]);

      if (!node || !node.children) {
        // reset path to /, since we are in an illegal path
        // or path is not a folder
        setPath([]);
        return;
      }

      root = node.children!;
    }

    setBrowsedFiles(root);
  }

  async function handleFileClick(file: FileEntry) {
    if (!file.children) {
      const abspath = (await join(rootPath, ...path, file.name!)).replace(
        /\\/g,
        "/",
      );

      await shell.open(`vscode://file/${abspath}`);
    } else {
      const newPath = [...path, file.name!];
      setPath(newPath);
      refreshBrowsedFiles(newPath);
    }
  }

  function handleBackwards() {
    const newPath = path.slice(0, path.length - 1);
    setPath(newPath);
    refreshBrowsedFiles(newPath);
  }

  function handlePathJump(index: number) {
    const newPath = path.slice(0, index + 1);
    setPath(newPath);
    refreshBrowsedFiles(newPath);
  }

  useEffect(() => {
    refreshFiles();

    const cancel = watch(rootPath, refreshFiles, { recursive: true });

    return () => {
      cancel.then((fn) => fn());
    };
  }, []);

  useEffect(() => {
    refreshBrowsedFiles(path);
  }, [projectFiles]);

  return (
    <div>
      <div className="w-full h-7 border-b-4 border-background-highest flex">
        <div className="h-full border-r-4 border-background-highest px-3 flex items-center bg-background-higher">
          <Text variant="small">Project Files</Text>
        </div>
        <div className="h-full border-r-4 border-background-highest px-3 flex items-center bg-background-higher">
          <Text variant="small">
            <a
              href="#"
              onClick={() => handlePathJump(-1)}
              className="hover:underline"
            >
              .
            </a>
            /
            {path.map((part, i) => (
              <>
                <a
                  href="#"
                  onClick={() => handlePathJump(i)}
                  className="hover:underline"
                >
                  {part}
                </a>
                /
              </>
            ))}
          </Text>
        </div>
        <div className="grow"></div>
        <div
          className="h-full border-l-4 border-background-highest px-1 flex items-center bg-background-higher cursor-pointer"
          onClick={refreshFiles}
        >
          <Refresh className="w-4" />
        </div>
      </div>
      <div className="flex gap-2">
        {path.length > 0 && (
          <FileViewerFile
            entry={{ path: "", name: ".." }}
            handleFileClick={handleBackwards}
            isBack={true}
          />
        )}
        {browsedFiles.map((entry) => (
          <FileViewerFile
            entry={entry}
            key={entry.path}
            handleFileClick={handleFileClick}
            isBack={false}
          />
        ))}
      </div>
    </div>
  );
}
