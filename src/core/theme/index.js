import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

export { theme }

export default class ThemeWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={theme} {...this.props}/>
    )
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]).isRequired
}
