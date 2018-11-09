import PropTypes from 'prop-types'
import styled from 'styled-components'

import Checkmark from './Checkmark.base'


const GrayCheckmark = styled(Checkmark)`
  stroke: ${props => props.theme.colors.loading}
`

GrayCheckmark.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      loading: PropTypes.string
    })
  })
}

/** @component */
export default GrayCheckmark
