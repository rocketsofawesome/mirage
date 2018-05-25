import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Main title component
 */
const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.headerFont};
  font-size: 2.625em;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.0476190476190477;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.navy};
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};
`

H1.propTypes = {
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
export default H1
