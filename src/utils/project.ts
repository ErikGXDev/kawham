import { BaseDirectory, exists } from "@tauri-apps/api/fs";
import { readJSONFile, writeJSONFile } from "./fs";
import { kaboomVersion, kawhamVersion } from "./global";

export interface Project {
  name: string;
  path: string;
  kawhamVersion: string;
  kaboomVersion: string;
}

export type ProjectsFile = Project[];

// TODO: Verify Project File Structure
export async function getProjects() {
  let f = await readJSONFile<ProjectsFile>("projects.json", [], {
    dir: BaseDirectory.AppLocalData,
  });
  return f;
}

export async function saveProjects(data: ProjectsFile) {
  await writeJSONFile("projects.json", data, {
    dir: BaseDirectory.AppLocalData,
  });
}

export async function createProject(name: string, path: string) {
  if (name.length == 0 || path.length == 0 || !(await exists(path))) {
    return;
  }

  let f = await getProjects();

  f.push({
    name,
    path,
    kaboomVersion,
    kawhamVersion,
  });

  saveProjects(f);

  return f;
}
