import { formatFiles, Tree, updateJson } from '@nrwl/devkit';

function sortWorkspaceProjects(host: Tree) {
  updateJson(host, 'workspace.json', (json) => {
    const sortedProjects = Object.keys(json.projects)
      .sort()
      .reduce((obj, key) => {
        obj[key] = json.projects[key];
        return obj;
      }, {});
    json.projects = sortedProjects;
    return json;
  });
}

function sortProjectsPaths(host: Tree) {
  updateJson(host, 'tsconfig.base.json', (json) => {
    const sortedPaths = Object.keys(json.compilerOptions.paths)
      .sort()
      .reduce((obj, key) => {
        obj[key] = json.compilerOptions.paths[key];
        return obj;
      }, {});
    json.compilerOptions.paths = sortedPaths;
    return json;
  });
}

export default async function (host: Tree) {
  sortWorkspaceProjects(host);
  sortProjectsPaths(host);
  await formatFiles(host);
}
