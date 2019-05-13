import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Desktop = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.aboveLaptop`
  display: ${props => props.display};
`}
`

Desktop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Desktop.defaultProps = {
  display: 'block',
  element: 'div'
}

const Tablet = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.aboveTablet`
  display: ${props => props.display};
`}
${props => props.theme.breakpointsVerbose.abovelaptop`
  display: none;
`}
`

Tablet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Tablet.defaultProps = {
  display: 'block',
  element: 'div'
}

const Mobile = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: ${props => props.display};
${props => props.theme.breakpointsVerbose.aboveTablet`
  display: none;
`}
`

Mobile.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Mobile.defaultProps = {
  display: 'block',
  element: 'div'
}

const Default = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.belowLaptop`
  display: ${props => props.display};
`}
`

Default.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Default.defaultProps = {
  display: 'block',
  element: 'div'
}

export {Desktop, Tablet, Mobile, Default}
