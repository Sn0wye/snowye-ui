module.exports = {
  'stories': [
    '../src/pages/**/*.stories.mdx',
    '../src/stories/**/*.stories.tsx'
  ],
  'addons': [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-docs',
 ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  },
}