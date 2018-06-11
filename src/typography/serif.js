import PropTypes from 'prop-types'
import styled from 'styled-components'

const Serif = styled.span`
  text-align: left;
  letter-spacing: normal;

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 24px;
  line-height: 1.2083333333333333;
`

Serif.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      secondaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

/** @component */
export default Serif
