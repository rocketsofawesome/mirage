import PropTypes from 'prop-types'
import styled from 'styled-components'

const H3 = styled.h3`
  letter-spacing: 0.5px;
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.headerFont};
  font-size: ;
  font-weight: 500;
  line-height: 1.0833333333333333;
`

H3.propTypes = {
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

H3.defaultProps = {
  fontSize: '1.5em'
}

/** @component */
export default H3
