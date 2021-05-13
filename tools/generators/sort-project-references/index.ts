import { formatFiles, Tree, updateJson } from '@nrwl/devkit';

function setDefaultProject(host: Tree) {
  updateJson(host, 'workspace.json', (json) => {
    json.defaultProject = 'api';
    return json;
  });
}

export default async function (host: Tree) {
  setDefaultProject(host);
  await formatFiles(host);
}
