const path = require('path');

module.exports = {
  stories: ['../src/stories/Welcome.stories.mdx','../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.module\.scss/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /^((?!\.module).)*\.scss/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        'sass-loader'
      ],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.alias['components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['stories'] = path.resolve(__dirname, '../src/stories');
    config.resolve.alias['constants'] = path.resolve(__dirname, '../src/constants');
    config.resolve.alias['helper'] = path.resolve(__dirname, '../src/helper');
    config.resolve.alias['hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['scss'] = path.resolve(__dirname, '../src/scss');
    config.resolve.alias['@src'] = path.resolve(__dirname, '../src');
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@stories'] = path.resolve(__dirname, '../src/stories');
    config.resolve.alias['@constants'] = path.resolve(__dirname, '../src/constants');
    config.resolve.alias['@helper'] = path.resolve(__dirname, '../src/helper');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@scss'] = path.resolve(__dirname, '../src/scss');
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|tf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          }
        }
      ],
      include: path.resolve(__dirname, '../public')
    });



    return config;
  },
};
