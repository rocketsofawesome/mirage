import { css } from 'styled-components'

const sizes = {
  phone: 321,
  phoneMax: 414,
  tablet: 768,
  mobileNav: 889,
  tabletMax: 960,
  laptop: 1024,
  desktop: 1440
}

const breakpoints  = {
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)'
}

Object.keys(sizes).forEach((label) => {
  breakpoints[`below${label.charAt(0).toUpperCase()}${label.substr(1)}`] =
  `(max-width: ${sizes[label] - 1}px)`
  breakpoints[`above${label.charAt(0).toUpperCase()}${label.substr(1)}`] =
  `(min-width: ${sizes[label]}px)`
})

export { breakpoints, sizes }

export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const remSize = sizes[label] / 10
  accumulator[label] = (...args) => css`
    @media (min-width: ${remSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const breakpointsVerbose = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media ${breakpoints[label]} {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
