import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  ${props => props.center ? 'text-align: center;' : ''}
  letter-spacing: ${props => props.letterSpacing};
  text-transform: ${props => props.lowercase
    ? 'inherit' : 'uppercase'};

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.headerFont};
  font-size: ${props => props.fontSizes.mobile};
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    font-size: ${props => props.fontSizes.desktop};
  `}
  font-weight: 500;
  line-height: ${props => props.lineHeights.mobile};
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    line-height: ${props => props.lineHeights.desktop};
  `}
  margin: ${props => props.margin};
`

H1.propTypes = {
  letterSpacing: PropTypes.string,
  fontSizes: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string
  }),
  lineHeights: PropTypes.shape({
    desktop: PropTypes.number,
    mobile: PropTypes.number
  }),
  margin: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      headerFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }),
  lowercase: PropTypes.bool,
}

H1.defaultProps = {
  letterSpacing: '.1rem',
  fontSizes: {
    desktop: '4.2rem',
    mobile: '3.2rem'
  },
  lineHeights: {
    desktop: 1.0476190476190477,
    mobile: 1.3
  },
  margin: '5.5rem 0'
}

export default H1
