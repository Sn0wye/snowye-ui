import DefaultTheme from 'vitepress/theme'

import Button from '../components/Button.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {

    app.component('Button', Button)
  },
}
