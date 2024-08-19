import { createApp } from 'vue'
import VueApp from './App.vue'
import VueContentPlaceholderPlugin from './index'

const app = createApp(VueApp)
app.use(VueContentPlaceholderPlugin)
app.mount('#app')
