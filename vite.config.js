import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import i18nAuto from 'rollup-plugin-i18n-auto'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    i18nAuto({
      mode: 'serve',
      include: ['**.js', '**.vue'], // 针对什么文件进行国际化词条
      exclude: ['src/i18n/index.js'],
      i18nCallee: 'i18n.global.t', // 例子
      dependency: {  // 例子
        name: 'i18n',
        value: '/src/i18n/index.js'
      },
      transform: true, // 转译源码，不写也可以，默认是true
      translate: {
        on: false
      }
    })
  ],
})
