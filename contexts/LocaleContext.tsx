'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Locale = 'ja' | 'en'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  isMounted: boolean
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ja',
  setLocale: () => {},
  isMounted: false,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && (savedLocale === 'ja' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isMounted }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
