import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import miniTheme from './mini/miniTheme'

const themeNames = {
  default: theme,
  mini: miniTheme
}

export default class ROATheme extends Component {
  render () {
    const { themeName } = this.props
    const themeRules = themeNames[themeName]
    return (
      <ThemeProvider theme={themeRules} {...this.props}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

ROATheme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  themeName: PropTypes.string
}

ROATheme.defaultProps = {
  themeName: 'default'
}

export { theme, ROATheme }
