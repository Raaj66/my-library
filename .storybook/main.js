const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.mdx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
  ],
  webpackFinal: async (config) => {
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../'),
    // });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]-[hash:base64:5]'
            },
          },
        },
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../'),
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
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');

    return config;
  },
};
