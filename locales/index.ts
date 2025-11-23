import { ja } from './ja'
import { en } from './en'

export type Translations = typeof ja

export const translations: Record<'ja' | 'en', Translations> = {
  ja,
  en,
}
