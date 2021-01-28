import styled from 'styled-components'

export const PromptWrapper = styled.div`
  padding-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 250px;
  padding-right: 250px;
`

export const DefaultPromt = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: #647690;
`

export const CorrectPrompt = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: #FFFFFF;
`

export const WrongPrompt = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  color: #65000b;
`

export const Character = styled.span`
  background-color: #000;
`

export const CurrentPrompt = styled.span`
  background-color: #000;
`