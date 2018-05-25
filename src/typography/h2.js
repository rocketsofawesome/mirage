import PropTypes from 'prop-types'
import styled from 'styled-components'

/** @component */
const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 32px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.0625;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navy};
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};
`
H2.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      headerFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  }),
  lowercase: PropTypes.bool
}

/** @component */
export default H2
