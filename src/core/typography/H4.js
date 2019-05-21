import PropTypes from 'prop-types'
import styled from 'styled-components'

const H4 = styled.h4`
  letter-spacing: 0.5px;

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  margin: ${props => props.margin};
`

H4.propTypes = {
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

H4.defaultProps = {
  fontSize: '1.8rem',
  margin: '2.4rem 0'
}

/** @component */
export default H4
