import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  letter-spacing: ${props => props.letterSpacing};
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};

  color: ${props => props.theme.colors.navy}

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`

Label.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }),
  lowercase: PropTypes.bool
}

Label.defaultProps = {
  letterSpacing: '.1rem',
  fontSize: '1.4rem',
  fontWeight: '500'
}

/** @component */
export default Label
