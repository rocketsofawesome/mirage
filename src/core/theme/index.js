import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Fonts } from './fontFamilies'
import theme, { BaseFontSize } from './theme'

const ROATheme = (props) => {
  return (
    <main>
      <BaseFontSize />
      <Fonts />
      <ThemeProvider theme={theme} {...props} />
    </main>
  )
}

export default ROATheme
export { theme, ROATheme }
