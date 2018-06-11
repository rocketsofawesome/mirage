import PropTypes from 'prop-types'
import styled from 'styled-components'

/** @component */
const H2 = styled.h2`
    margin: 0;

    ${props => props.center ? 'text-align: center;' : ''}
    letter-spacing: 0.5px;
    text-transform: ${props => props.lowercase
      ? 'inherit' : 'uppercase'};

    color: ${props => props.theme.colors.navy};

    font-family: ${props => props.theme.fonts.headerFont};
    font-size: 2em;
    font-weight: 500;
    line-height: 1.0625;
`
H2.propTypes = {
  center: PropTypes.bool,
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

/** @component */
export default H2
