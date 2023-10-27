import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    messages: {
        zh: {
            "0": "是是",
            "1": "危险",
            "2": "我是谁",
            "3": "你好啊",
            "4": "速度",
            "5": "我来了"
        },
        en: {
            "0": "yes",
            "1": "danger",
            "2": "wh0",
            "3": "hello",
            "4": "speed",
            "5": "I am coming"
        }
    }
})

export default i18n