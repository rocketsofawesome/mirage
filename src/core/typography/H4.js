import PropTypes from 'prop-types'
import styled from 'styled-components'

const H4 = styled.h4`
  letter-spacing: 0.5px;

  color: ${props => props.theme.colors.navy};
  text-align: ${props => props.align};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-style: ${props => props.italic ? 'italic': 'normal'};
  line-height: 1;
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'}
  margin: ${props => props.margin};
`

H4.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    }),
    margin: PropTypes.string,
    italic: PropTypes.bool,
    uppercase: PropTypes.bool
  })
}

H4.defaultProps = {
  fontSize: '1.8rem',
  margin: '2.3rem 0',
  italic: true,
  uppercase: false,
  align: 'left'
}

/** @component */
export default H4
