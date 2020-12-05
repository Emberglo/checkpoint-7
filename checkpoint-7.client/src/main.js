// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import router from './router'

const root = createApp(App)
registerGlobalComponents(root)
App.use(require('vue-moment'))

root
  .use(router)
  .mount('#app')
