import PropTypes from 'prop-types'
import styled from 'styled-components'

const H4 = styled.h4`
font-family: ${props => props.theme.fonts.primaryFont};
font-size: 18px;
font-weight: 500;
font-style: italic;
font-stretch: normal;
line-height: 1;
letter-spacing: 0.5px;
color: ${props => props.theme.colors.navy};
`

H4.propTypes = {
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
export default H4
