import './ts/custom-element/custom-element.ts'
import { configureLocalization } from '@lit/localize'
import { sourceLocale, targetLocales } from './generated/locale-codes'

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) => import(`./generated/locales/${locale}`),
})
;(async () => {
  console.log(navigator.language || sourceLocale)
  await setLocale(navigator.language || sourceLocale)
})()
