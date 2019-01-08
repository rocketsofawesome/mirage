import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseHamburger from './Hamburger.base'

const Hamburger = styled(BaseHamburger)`
  stroke: ${props => props.theme.colors.white};
`

Hamburger.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default Hamburger
