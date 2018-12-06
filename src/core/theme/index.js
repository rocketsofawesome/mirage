import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const ROATheme = (props) => {
  return (<ThemeProvider theme={theme} {...props} />)
}

ROATheme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

export default ROATheme
export { theme, ROATheme }
