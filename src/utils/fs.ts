import { fs } from "@tauri-apps/api";
import {
  BaseDirectory,
  BinaryFileContents,
  FsOptions,
} from "@tauri-apps/api/fs";

export async function readJSONFile<T>(filename: string, options?: FsOptions) {
  if (!fs.exists(filename, options)) {
    writeJSONFile(filename, "{}", options);
  }

  let j = await fs.readTextFile(filename, options);
  let p: T = JSON.parse(j);
  return p;
}

export async function writeJSONFile(
  filename: string,
  content: string,
  options?: FsOptions
) {
  return fs.writeTextFile(filename, JSON.stringify(content, null, 2), options);
}
