import React from 'react'

import en from './languages/en.json'
import tc from './languages/tc.json'

import { LangProvider, Lang } from 'cm-lang'
import 'cm-lang/dist/index.css'

const App = () => {
  return (
    <LangProvider defaultLanguage='tc' defaultTranslation={{ en, tc }}>
      <Lang>welcome</Lang>
      <Lang>!! I am not in translation</Lang>
    </LangProvider>
  )
}

export default App
