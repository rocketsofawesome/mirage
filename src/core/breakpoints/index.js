import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Desktop = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.aboveTabletMax`
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

const Laptop = styled(({element, children, ...props}) => {
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.aboveLaptop`
  display: ${props => props.display};
`}
`

Laptop.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Laptop.defaultProps = {
  display: 'block',
  element: 'div'
}

const Tablet = styled(({element, children, ...props}) => {
  delete props.laptopDisplay
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose.aboveTablet`
  display: ${props => props.display};
`}
${props => props.theme.breakpointsVerbose.aboveLaptop`
  display: ${props => props.laptopDisplay};
`}
`

Tablet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
Tablet.defaultProps = {
  display: 'block',
  element: 'div',
  laptopDisplay: 'none'
}

const TabletMax = styled(({element, children, ...props}) => {
  delete props.laptopDisplay
  return React.createElement(element, props, children)
})`
  display: none;
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    display: ${props => props.display};
  `}
  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    display: ${props => props.laptopDisplay};
  `}
`

TabletMax.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node
}
TabletMax.defaultProps = {
  display: 'block',
  element: 'div',
  laptopDisplay: 'none'
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
  delete props.displayTarget
  return React.createElement(element, props, children)
})`
display: none;
${props => props.theme.breakpointsVerbose[props.displayTarget]`
    display: ${props => props.display};
`}
`

Default.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.node,
  displayTarget: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
Default.defaultProps = {
  display: 'block',
  element: 'div',
  displayTarget: 'belowTabletMax'
}

export {
  Default,
  Desktop,
  Laptop,
  Mobile,
  Tablet,
  TabletMax
}
