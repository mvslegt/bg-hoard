import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: Schema) {
  await libraryGenerator(host, {
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `scope:${schema.directory},type:util`,
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

interface Schema {
  name: string;
  directory: 'store' | 'api' | 'shared';
}
