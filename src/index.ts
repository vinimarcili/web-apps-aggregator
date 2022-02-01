import { configureLocalization } from '@lit/localize'
import { sourceLocale, targetLocales } from './generated/locale-codes'

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) => import(`./generated/locales/${locale}`),
})
;(async () => {
  await setLocale(navigator.language || sourceLocale)
})()
import './ts/web-apps-aggregator/web-apps-aggregator.ts'
