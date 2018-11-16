import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import cloudinary from './cloudinary'

class BaseImage extends React.Component {
  render () {
    const { alt, className, url } = this.props
    return (
      <img className={className} alt={alt} src={cloudinary.url(url)} />
    )
  }
}

const fadein = keyframes`
  from { opacity: 0; }
  to { opacity: 1;}
`

const animation = css`
  animation: ${fadein} 0.25s ease-in;
`

const Image = styled(BaseImage)`
  ${props => props.animated && animation}
`

Image.propTypes = {
  animated: PropTypes.bool
}

Image.defaltProps = {
  animated: true
}
/** @component */
export default Image
