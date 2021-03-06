import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseAIcon from './AIcon.base'

const NavyAIcon = styled(BaseAIcon)`
  fill: ${props => props.theme.colors.navy};
`

NavyAIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

/** @component */
export default NavyAIcon
