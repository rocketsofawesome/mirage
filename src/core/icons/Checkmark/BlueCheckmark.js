import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkmark from './Checkmark.base'


const BlueCheckmark = styled(Checkmark)`
  stroke: ${props => props.theme.colors.rocketBlue}
`

BlueCheckmark.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

/** @component */
export default BlueCheckmark
