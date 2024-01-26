import {
  FsOptions,
  exists,
  readTextFile,
  writeTextFile,
} from "@tauri-apps/api/fs";

export async function readJSONFile<T>(
  filename: string,
  fallback: any = {},
  options?: FsOptions,
): Promise<T> {
  if (!(await exists(filename, options))) {
    console.log("what now");
    await writeJSONFile(filename, fallback, options);
    return fallback;
  }

  let j = await readTextFile(filename, options);
  let p: T = JSON.parse(j);
  return p;
}

export async function writeJSONFile(
  filename: string,
  content: any,
  options?: FsOptions,
) {
  return writeTextFile(filename, JSON.stringify(content, null, 2), options);
}
