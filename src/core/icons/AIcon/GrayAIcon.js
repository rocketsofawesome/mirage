import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseAIcon from './AIcon.base'

const GrayAIcon = styled(BaseAIcon)`
  fill: ${props => props.theme.colors.gray[3]};
`

GrayAIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  })
}

/** @component */
export default GrayAIcon
