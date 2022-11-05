import DefaultTheme from 'vitepress/theme'

import Button from '../components/Button.vue'
import TextInput from '../components/TextInput.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {

    app.component('Button', Button)
    app.component('TextInput', TextInput)
  },
}
