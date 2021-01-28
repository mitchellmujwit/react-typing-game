import React from 'react'
import Timer from './Components/TImer/Timer'
import GlobalStyle from './GlobalStyles'
import Prompt from './Components/Prompt/Prompt'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Timer />
      <Prompt />
    </>
  )
}

export default App
