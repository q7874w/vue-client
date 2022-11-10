import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import 'animate.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')

// 注册 element+的 icon组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
