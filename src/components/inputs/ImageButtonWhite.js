import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseImageButton from './ImageButton.base'

const ImageButtonWhite = styled(BaseImageButton)`
  > button {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.rocketBlue};
  }
  > .borderBottom {
    background-color: ${props => props.theme.colors.rocketBlue};
  }
`

ImageButtonWhite.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}

/** @component */
export default ImageButtonWhite
