import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import i18nAuto from 'rollup-plugin-i18n-auto'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const plugins = [
        vue()
    ]
    const i18nAutoConf = {
        output: {
            path: path.resolve('src/assets')
        },
        include: ['**.js', '**.vue'], // 针对什么文件进行国际化词条
        exclude: ['src/i18n/index.js'],
        i18nCallee: 'i18n.global.t', // 例子
        dependency: {  // 例子
          name: 'i18n',
          value: '/src/i18n/index.js'
        },
        transform: true, // 转译源码，不写也可以，默认是true
    }
    if (command === 'serve') {
        i18nAutoConf.mode = command
    } else if (command === 'build') {
        i18nAutoConf.mode = command
        i18nAutoConf.translate = {
            on: true,
            secretId: '', // your id
            secretKey: '' // your key
        }
    }
    // plugins.push(i18nAuto(i18nAutoConf))
    plugins.push(i18nAuto({
        exclude: ['node_modules/**'],
        include: ['**.js', '**.jsx', '**.ts', '**.tsx', '**.vue'], // 针对什么文件进行国际化词条
        output: {
            path: path.resolve('src/locales'),
            generate: true // 生成代码词条配置文件，默认为true，不写也可以
        },
        transform: false // 不转译源码
    }))
    return {
        plugins
    }
})
