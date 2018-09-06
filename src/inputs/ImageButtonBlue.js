import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseImageButton from './ImageButton.base'

const ImageButtonBlue = styled(BaseImageButton)`
  > button {
    background-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.white};
  }
  > .borderBottom {
    background-color: ${props => props.theme.colors.white};
  }
`

ImageButtonBlue.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default ImageButtonBlue
