import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Spinner.base'

const NavySpinner = styled(Spinner)`
  rect {
    fill: ${props => props.theme.colors.navy};
  }
`

NavySpinner.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

/** @component */
export default NavySpinner
