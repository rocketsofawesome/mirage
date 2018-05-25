import PropTypes from 'prop-types'
import styled from 'styled-components'

const Serif = styled.span`
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2083333333333333;
  letter-spacing: normal;
  text-align: left;
  color: ${props => props.theme.colors.navy};
`

Serif.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      secondaryFont: PropTypes.string.isRequired
    }).isRequired,
    colors: PropTypes.shape({
      navy: PropTypes.string.isRequired
    }).isRequired
  })
}

/** @component */
export default Serif
