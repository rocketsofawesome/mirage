import PropTypes from 'prop-types'
import styled from 'styled-components'

const H2 = styled.h2`
    ${props => props.center ? 'text-align: center;' : ''}
    letter-spacing: .05rem;
    text-transform: ${props => props.lowercase
      ? 'inherit' : 'uppercase'};

    color: ${props => props.theme.colors.navy};

    font-family: ${props => props.theme.fonts.headerFont};
    font-size: ${props => props.fontSizes.mobile};
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      font-size: ${props => props.fontSizes.desktop};
    `}
    font-weight: 500;
    line-height: 1.0625;
    margin: ${props => props.margin};
`
H2.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      headerFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }),
  lowercase: PropTypes.bool
}

H2.defaultProps = {
  fontSizes: {
    desktop: '3.2rem',
    mobile: '2.4rem'
  },
  margin: '2.6rem 0'
}

export default H2
