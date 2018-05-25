import PropTypes from 'prop-types'
import styled from 'styled-components'

const P = styled.p`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.3125;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.navy};
`

P.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  })
}

/** @component */
export default P
