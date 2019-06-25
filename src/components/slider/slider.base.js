import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Slider from 'react-slick'
import { InlineImage } from 'SRC'

class BaseROASlider extends Component {
  constructor (props) {
    super(props)
    this.config = {
      infinite: true,
      lazyLoad: 'progressive',
      arrows: false,
      slidesToShow: 1,
      dots: true,
      dotsClass: 'dots'
    }
  }
  render() {
    const { className, images } = this.props
    return (
      <Slider className={className} {...this.config}>
        {images.map((image) => {
          return (
            <InlineImage
              alt={image.alt}
              src={image.src} />
          )
        })}
      </Slider>
    )
  }
}


BaseROASlider.propTypes = {

}

/** @component */
export default BaseROASlider
