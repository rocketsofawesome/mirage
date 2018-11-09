import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Spinner.base'

const BlueSpinner = styled(Spinner)`
  rect {
    fill: ${props => props.theme.colors.rocketBlue};
  }
`

BlueSpinner.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

/** @component */
export default BlueSpinner
