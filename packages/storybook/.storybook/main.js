module.exports = {
  stories: ["../src/pages/**/*.stories.mdx", "../../react/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  docs: {
    docsPage: "automatic"
  }
};