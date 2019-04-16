import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseClose from './Close.base'

const Close = styled(BaseClose)`
  stroke: ${props => props.theme.colors.rocketBlue};
`

Close.propTypes = {
  className: PropTypes.string
}

/** @component */
export default Close
