import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import miniColors from './miniColors'
import { theme } from './theme'

export const miniTheme = {
  ...theme,
  colors: miniColors
}

class MiniTheme extends Component {
  render () {
    return (
      <ThemeProvider theme={miniTheme} {...this.props}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

MiniTheme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}

/** @component */
export default MiniTheme
