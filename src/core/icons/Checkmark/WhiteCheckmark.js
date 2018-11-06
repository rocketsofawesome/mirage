import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkmark from './Checkmark.base'


const WhiteCheckmark = styled(Checkmark)`
  stroke: ${props => props.theme.colors.white}
`

WhiteCheckmark.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default WhiteCheckmark
