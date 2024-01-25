import Input, { InputProps } from "@components/rui/Input";
import { cn } from "@utils/cn";
import { open } from "@tauri-apps/api/dialog";
import { forwardRef, useState } from "react";
import { documentDir } from "@tauri-apps/api/path";

interface GapProps extends InputProps {
  defaultPath?: string;
  multiple?: boolean;
}

const FolderPicker = forwardRef(({ ...props }: GapProps, ref) => {
  const [selected, setSelected] = useState<string[]>([]);

  async function browseFolder() {
    let fallbackFolder = await documentDir();
    let selectedFolders = await open({
      directory: true,
      multiple: props.multiple,
      defaultPath: props.defaultPath || fallbackFolder,
    });

    if (!selectedFolders) return;

    if (!Array.isArray(selectedFolders)) {
      selectedFolders = [selectedFolders];
    }

    setSelected([...selectedFolders]);
  }

  return (
    <Input
      onFocus={(e) => {
        e.preventDefault();
        browseFolder();
        e.target.blur();
      }}
      onInput={(e) => {
        e.preventDefault();
      }}
      ref={ref as any}
      value={selected.join(", ")}
    ></Input>
  );
});

export default FolderPicker;
