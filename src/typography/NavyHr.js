import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseHr from './Hr.base'

const NavyHr = styled(BaseHr)`
  background-color: ${props => props.theme.colors.navy};
`

NavyHr.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  }).isRequired,
}

/** @component */
export default NavyHr
