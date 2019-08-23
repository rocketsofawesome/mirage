import PropTypes from 'prop-types'
import styled from 'styled-components'

const H1 = styled.h1`
  ${props => props.center ? 'text-align: center;' : ''}
  letter-spacing: .1rem;
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
  fontSizes: {
    desktop: '4.2rem',
    mobile: '3.2rem'
  },
  margin: '5.5rem 0',
  lineHeights: {
    desktop: 1.0476190476190477,
    mobile: 1.3
  }
}

export default H1
