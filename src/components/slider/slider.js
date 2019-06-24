import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import { InlineImage } from 'SRC'

const RocketSlider = styled((images) => {
  return (
    <Slider>
      {images.map((image) => {
        return (
          <InlineImage
            alt={image.alt}
            src={image.src} />
        )
      })}
    </Slider>
  )
})`

`

RocketSlider.propTypes = {

}

/** @component */
export default RocketSlider
