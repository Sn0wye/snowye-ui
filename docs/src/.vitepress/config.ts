import { defineConfig } from "vitepress";

export default defineConfig({
  title: 'Snowye UI',
  description: 'Snowye-ui kit docs.',
  lang: 'en-US',
  themeConfig: {

  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
  ],
    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            {
              text: 'Introduction', link: '/docs/getting-started/introduction',
            },
            {
              text: 'Getting Started', link: '/docs/getting-started/',
            }
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'TextInput', link: '/docs/components/TextInput'
            }
          ]
        }
      ],
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Gabriel Trzimajewski'
    },
    editLink: {
      pattern: 'https://github.com/Sn0wye/snowye-ui/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  // base: '/docs'
});