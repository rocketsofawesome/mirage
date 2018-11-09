import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseHamburger from './Hamburger.base'

const NavyHamburger = styled(BaseHamburger)`
  stroke: ${props => props.theme.colors.navy};
`

NavyHamburger.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default NavyHamburger
