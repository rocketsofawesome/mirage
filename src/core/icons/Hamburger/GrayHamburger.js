import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseHamburger from './Hamburger.base'

const GrayHamburger = styled(BaseHamburger)`
  stroke: ${props => props.theme.colors.loading};
`

GrayHamburger.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default GrayHamburger
