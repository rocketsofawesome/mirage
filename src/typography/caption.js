import PropTypes from 'prop-types'
import styled from 'styled-components'

const Caption = styled.span`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navy};
`

Caption.propTypes = {
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

/** @component */
export default Caption
