import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/index'
import { createPinia } from 'pinia'
import '@/assets/styles/index.scss'
// 引入字体
import '@/assets/font/font.css';
import { utils } from '@/utils/index'

const app = createApp(App)

// 全局函数
app.config.globalProperties.$utils = utils

// 注册超出显示省略号指令
app.directive('moveTips', (el: HTMLElement, binding) => {

  el.style.overflow = 'hidden';
  el.style.textOverflow = 'ellipsis';
  el.style.whiteSpace = 'nowrap';
  el.addEventListener('mousemove', () => {

    if (el.scrollWidth > el.offsetWidth) {
      el.setAttribute('title', el.innerText);
    }

  })
})

app.use(router).use(createPinia()).mount('#app')

// 类型申明
type Utils = {
  times: () => number
  getString: (str: string) => string
}

// declare申明
declare module 'vue' {
  interface ComponentCustomProperties {
    $utils: Utils
  }
}