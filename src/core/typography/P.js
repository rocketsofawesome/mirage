import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from 'SRC/core/theme'

export const pStyle = css`
  letter-spacing: normal;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  line-height: normal;
`

const P = styled.p`
 ${pStyle}
 margin: 0;
 color: ${props => props.color};
`

P.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

P.defaultProps = {
  fontSize: '1.6rem',
  color: theme.colors.navy
}

/** @component */
export default P
