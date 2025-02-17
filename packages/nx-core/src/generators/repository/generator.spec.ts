import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { RepositoryGeneratorSchema } from './schema';

describe('repository generator', () => {
  let appTree: Tree;
  const options: RepositoryGeneratorSchema = {};

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run pass', async () => {
    await generator(appTree, options);

    expect(true).toBeDefined();
  });
});
