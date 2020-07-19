import React, {
  createContext,
  useContext,
  useState,
  Fragment,
  useMemo
} from 'react'

const LangContext = createContext()

const getValue = (obj, path) =>
  path.reduce((a, c) => {
    return a[c]
  }, obj)

const useLanguage = () => {
  const { language, setLanguage } = useContext(LangContext)
  return [language, setLanguage]
}

const useTranslation = () => {
  const { translation, setTranslation } = useContext(LangContext)
  return [translation, setTranslation]
}

const useLang = () => {
  const { translation, language } = useContext(LangContext)
  return translation[language]
}

const Lang = ({ children: key }) => {
  const lang = useLang()
  return <Fragment>{getValue(lang, key.split('.')) || key}</Fragment>
}

const LangProvider = ({ children, defaultLanguage, defaultTranslation }) => {
  const [language, setLanguage] = useState(defaultLanguage)
  const [translation, setTranslation] = useState(defaultTranslation)
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      translation,
      setTranslation
    }),
    [language, setLanguage, translation, setTranslation]
  )
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export { LangProvider, LangContext, useLanguage, useTranslation, useLang, Lang }
