import PropTypes from 'prop-types'
import styled from 'styled-components'

const H4 = styled.h4`
  letter-spacing: 0.5px;

  color: ${props => props.theme.colors.navy};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 1.125em;
  font-weight: 500;
  font-style: italic;
  line-height: 1;
`

H4.propTypes = {
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

/** @component */
export default H4
