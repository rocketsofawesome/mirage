import PropTypes from 'prop-types'
import styled from 'styled-components'

const H3 = styled.h3`
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.0833333333333333;
  letter-spacing: 0.5px;
  text-align: left;
  color: ${props => props.theme.colors.navy};
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};
`

H3.propTypes = {
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
export default H3
