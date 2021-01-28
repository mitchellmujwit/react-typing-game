import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #222831;
    font-family: font-family: 'Roboto Mono', monospace;
  }
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#1b70b1' : '#1b70b1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #22283;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#1b70b1' : '#1b70b1')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyle;