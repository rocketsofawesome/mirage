import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export { theme }

const ThemeWrapper = (props) => {
  return (<ThemeProvider theme={theme} {...props} />)
}

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

export default ThemeWrapper
