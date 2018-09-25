import PropTypes from 'prop-types'
import styled from 'styled-components'

const Caption = styled.span`
  margin: 0;

  ${props => props.center ? 'text-align: center;' : ''}
  letter-spacing: 1.29;
  text-transform: ${props => props.uppercase
    ? 'uppercase' : 'inherit'};

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-style: italic;
  font-weight: 500;
  line-height: 1.29;
`

Caption.propTypes = {
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

Caption.defaultProps = {
  fontSize: '0.875em'
}

/** @component */
export default Caption
