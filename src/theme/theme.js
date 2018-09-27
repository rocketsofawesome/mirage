import { injectGlobal } from 'styled-components'
import { colors } from './colors'
import media from './breakpoints'
import fontFamilies from './fontFamilies'
import gridSettings from './gridSettings'

const base = injectGlobal`
  html {
    font-size: 10px;
  }
`

export default {
  colors: colors,
  fonts: fontFamilies,
  grid: gridSettings,
  fixedPosition: 'relative',
  media: media,
  base: base
}
