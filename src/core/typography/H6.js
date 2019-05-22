import PropTypes from 'prop-types'
import styled from 'styled-components'

const H6 = styled.h6`
  letter-spacing: .075rem;

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  margin: ${props => props.margin};
`

H6.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

H6.defaultProps = {
  fontSize: '1.4rem',
  margin: '3.2rem 0'
}

/** @component */
export default H6
