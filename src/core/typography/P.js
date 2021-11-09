import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from 'SRC/core/theme'
import { spaceFromProp } from 'utils/spacing'
import colorFromProp from 'utils/colors'

export const pStyle = css`
  letter-spacing: normal;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  line-height: normal;
  text-align: ${props => props.align};
`

const P = styled.p`
 ${pStyle}
 margin-top: ${spaceFromProp('marginTop')};
 margin-bottom: ${spaceFromProp('marginBottom')};
 color: ${colorFromProp('color')};
`

P.propTypes = {
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      textPrimary: PropTypes.string
    })
  })
}

P.defaultProps = {
  fontSize: '1.6rem',
  color: theme.colors.textPrimary,
  align: 'inherit',
  marginTop: 'none',
  marginBottom: 'none'
}

/** @component */
export default P
