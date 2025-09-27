import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'element-plus/theme-chalk/display.css'
import 'highlight.js/styles/github.css' // 选择你喜欢的主题
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'
import router from './router/index.js' // 
const app = createApp(App)
// const i18n = createI18n({
//   legacy: false, // 使用 Composition API 模式，而不是 Options API
//   locale: 'zh', // 默认语言
//   fallbackLocale: 'en', // 回退语言
//   messages: {
//     en,
//     zh
//   },
//   // 其他配置...
// })
app.use(router) // 使用路由
app.use(ElementPlus)
// app.use(i18n) 
// 引入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
