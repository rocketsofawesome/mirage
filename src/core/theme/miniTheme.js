import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default class MiniTheme extends Component {
  render () {
    return (
      <ThemeProvider theme={theme} {...this.props}>
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

export { theme, MiniTheme }
