import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const ROATheme = (props) => {
  return (<ThemeProvider theme={theme} {...props} />)
}

export default ROATheme
export { theme, ROATheme }
