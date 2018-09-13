import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  letter-spacing: 1px;
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};

  color: ${props => props.theme.colors.navy}

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 0.875em;
  font-weight: 500;
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

/** @component */
export default Label
