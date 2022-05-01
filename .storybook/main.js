module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-toolbars',
    'storybook-addon-performance/register'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  }
}
