import PropTypes from 'prop-types'
import styled from 'styled-components'

const P = styled.p`
  text-align: left;
  letter-spacing: normal;

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  line-height: 1.3125;
`

P.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

P.defaultProps = {
  fontSize: '1.6rem'
}

/** @component */
export default P
