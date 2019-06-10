import { injectGlobal } from 'styled-components'
import { colors } from './colors'
import media, { breakpoints, breakpointsVerbose } from './mediaQueries'
import fontFamilies from './fontFamilies'
import gridSettings from './gridSettings'

const basePxSize = 10

const base = injectGlobal`
  html {
    font-size: ${basePxSize}px;
  }
`

export default {
  basePxSize: basePxSize,
  breakpoints: breakpoints,
  colors: colors,
  fonts: fontFamilies,
  grid: gridSettings,
  fixedPosition: 'relative',
  media: media,
  breakpointsVerbose: breakpointsVerbose,
  base: base
}
