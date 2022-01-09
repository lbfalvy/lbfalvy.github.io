import I18n from './key'
import en from './en'
import hu from './hu'

const translations: Record<string, I18n> = { en, hu }

const search = new URLSearchParams(window.location.search)
const country = search.get('country')
const lang = search.get('lang') || (country == 'uk' ? 'en' : 'hu')

export default function i18n(key: keyof I18n): string {
    return translations[lang][key]
}

export {
    I18n, i18n
}