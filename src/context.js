import React, {
  createContext,
  useContext,
  useState,
  Fragment,
  useMemo
} from 'react'

const LangContext = createContext()

const useLanguage = () => {
  const { language, setLanguage } = useContext(LangContext)
  return [language, setLanguage]
}

const useTranslation = () => {
  const { translation, setTranslation } = useContext(LangContext)
  return [translation, setTranslation]
}

const Lang = ({ children: key }) => {
  const { translation, language } = useContext(LangContext)
  return <Fragment>{translation[language]?.[key] || key}</Fragment>
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

export { LangProvider, LangContext, useLanguage, useTranslation, Lang }
