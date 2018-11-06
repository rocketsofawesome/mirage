import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkmark from './Checkmark.base'


const NavyCheckmark = styled(Checkmark)`
  stroke: ${props => props.theme.colors.navy}
`

NavyCheckmark.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

/** @component */
export default NavyCheckmark
