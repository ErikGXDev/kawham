import { BaseDirectory } from "@tauri-apps/api/fs";
import { readJSONFile } from "./fs";

interface Project {
  name: string;
  path: string;
  kawhamVersion: string;
  kaboomVersion: string;
}

type ProjectsFile = Project[];

// TODO: Verify Project File Structure
export async function getAllProjects() {
  let f = await readJSONFile<ProjectsFile>("projects.json", [], {
    dir: BaseDirectory.AppLocalData,
  });
  return f;
}
