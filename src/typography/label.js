import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled.label`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  text-align: left;
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};
  color: ${props => props.theme.colors.navy};
`

Label.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  }),
  lowercase: PropTypes.bool
}

/** @component */
export default Label
