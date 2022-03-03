const path = require('path');
const DIR_PATH = path.join.bind(this, __dirname);

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon'
  ],
  features: {
    // * Transpiled ES6 classes are annotated with a /*#__PURE__*/ comment that
    // * hints to minifiers like Uglify and babel-minify for dead code elimination.
    // * This can lead to Module parse failed: Unexpected token errors and is a Babel V7 feature.
    // * To address this, babel 7 has to be enabled here and will be removed once SB uses this as its default
    // * As of writing, Babel 6 is SB's default
    babelModeV7: true
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.mjsx?$/,
            include: /node_modules/,
            type: 'javascript/auto'
          }
        ]
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
          '@/requests': DIR_PATH('..', 'src', 'requests'),
          '@/components': DIR_PATH('..', 'src', 'components'),
          '@/hooks': DIR_PATH('..', 'src', 'hooks'),
          '@/pages': DIR_PATH('..', 'src', 'pages'),
          '@/state': DIR_PATH('..', 'src', 'state'),
          '@/theme': DIR_PATH('..', 'src', 'theme'),
          '@/public': DIR_PATH('..', 'public'),
          '@/utils': DIR_PATH('..', 'src', 'utils')
        }
      }
    };
  }
};
