const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }
    currDir = dir;
  }
}

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  babel: async (options) => ({
    ...options,
    presets: [
      [
        'react-app',
        {
          flow: false,
          typescript: true,
        },
      ],
      '@emotion/babel-preset-css-prop',
    ],
  }),
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.resolve.alias = {
      src: path.resolve(__dirname, '../src'),
    };
    config.resolve.extensions.push('.ts', '.tsx');
    // Return the altered config, resolved emotion 11 and storybook 6 paths.
    config.plugins.push(
      new CircularDependencyPlugin({
        // exclude detection of files based on a RegExp
        exclude: /public|node_modules/,
        include: /src/,
        // add errors to webpack instead of warnings
        failOnError: true,
        // allow import cycles that include an asyncronous import,
        // e.g. via import(/* webpackMode: "weak" */ './file.js')
        allowAsyncCycles: false,
        // set the current working directory for displaying module paths
        cwd: process.cwd(),
      }),
    );

    return merge(config, {
      resolve: {
        alias: {
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
          'emotion-theming': getPackageDir('@emotion/react'),
        },
      },
    });
  },
};
