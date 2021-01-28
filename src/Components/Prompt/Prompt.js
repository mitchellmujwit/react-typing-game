import React, { useState, useEffect } from 'react'
import useKeyPress from '../useKeyPress'
import randomWords from 'random-words'
import { 
  PromptWrapper,
  DefaultPromt,
  CorrectPrompt,
  WrongPrompt,
  CurrentPrompt,
  Character
} from './Prompt.elements'

const Prompt = () => {
  
  const [wordPrompt, setWordPrompt] = useState(randomWords(50))
  const [currentPrompt, setCurrentPrompt] = useState([])
  const [completedPrompt, setCompletedPrompt] = useState([])
  const [wrongInput, setWrongInput] = useState(false)
  
  useEffect(() => {
    const letters = wordPrompt.map(line => line.trim().split("").map(c => c)).flat()
    setCurrentPrompt(letters)
  }, [wordPrompt])

  useKeyPress(key => {
    if ( key !== "Backspace") {
      setCompletedPrompt((prvLetters) => ([...prvLetters, key]))
    } else {
      setCompletedPrompt((prvLetters) => 
      (prvLetters.filter((_, i) => i !== prvLetters.length - 1)))
    }
  })

  let chrCount = -1

  return (
    <>
     <PromptWrapper>
       <DefaultPromt>
         <CorrectPrompt>
           {completedPrompt}
         </CorrectPrompt>
            {wordPrompt.map((line, i) =>
            <CurrentPrompt key={i}>
              {line.trim().split("").map((chr) => {
                chrCount += 1
                return (
                  <Character chr={chr} key={chrCount} completedPrompt={completedPrompt}/>
                )
              })}
            </CurrentPrompt>)}
            {wordPrompt.join(" ")}
        </DefaultPromt>
     </PromptWrapper>
    </>
  )
}

export default Prompt
