import PropTypes from 'prop-types'
import styled from 'styled-components'

const Serif = styled.span`
  text-align: left;
  letter-spacing: normal;

  color: ${props => props.theme.colors.textPrimary};

  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: ${props => props.fontSize};
  line-height: 1.2083333333333333;
`

Serif.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      secondaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      textPrimary: PropTypes.string
    })
  })
}

Serif.defaultProps = {
  fontSize: '2.4rem'
}

/** @component */
export default Serif
