import { createI18n } from 'vue-i18n'
import zh from '../assets/zh.json'
import en from '../assets/en.json'

const localeLang = window.sessionStorage.getItem('rollup-plugin-i18n-auto-demo__locale') || 'zh'
const i18n = createI18n({
    legacy: false,
    locale: localeLang,
    messages: {
        zh,
        en
    }
})

export default i18n