import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export default class ROATheme extends Component {
  render () {
    return (
      <ThemeProvider theme={theme} {...this.props}>
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
  ]).isRequired
}
