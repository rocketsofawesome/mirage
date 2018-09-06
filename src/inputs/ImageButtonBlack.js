import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseImageButton from './ImageButton.base'

const ImageButtonBlack = styled(BaseImageButton)`
  > button {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
  > .borderBottom {
    background-color: ${props => props.theme.colors.yellow};
  }
`

ImageButtonBlack.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      black: PropTypes.string,
      yellow: PropTypes.string,
      white: PropTypes.string
    })
  }).isRequired
}

/** @component */
export default ImageButtonBlack
