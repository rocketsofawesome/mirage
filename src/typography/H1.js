import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Main title component
 */
const H1 = styled.h1`
  margin: 0;

  ${props => props.center ? 'text-align: center;' : ''}
  letter-spacing: 1px;
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.headerFont};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  line-height:1.0476190476190477;
`

H1.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      headerFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }),
  lowercase: PropTypes.bool
}

H1.defaultProps = {
  fontSize: '4.2rem'
}

/** @component */
export default H1
