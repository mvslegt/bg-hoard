import { formatFiles, Tree, updateJson } from '@nrwl/devkit';

function sortProjects(host: Tree) {
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

export default async function (host: Tree) {
  sortProjects(host);
  await formatFiles(host);
}
