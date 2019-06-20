import { injectGlobal } from 'styled-components'
import { colors } from './colors'
import media, { breakpoints, breakpointsVerbose } from './mediaQueries'
import fontFamilies from './fontFamilies'
import gridSettings from './gridSettings'

const base = injectGlobal`
  html {
    font-size: 10px;
  }
`

export default {
  breakpoints: breakpoints,
  colors: colors,
  fonts: fontFamilies,
  grid: gridSettings,
  fixedPosition: 'relative',
  media: media,
  breakpointsVerbose: breakpointsVerbose,
  base: base
}
