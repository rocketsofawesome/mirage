import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { InlineImage, Chevron } from 'SRC'

class BaseROASlider extends Component {
  constructor (props) {
    super(props)
    this.config = {
      infinite: true,
      lazyLoad: 'progressive',
      arrows: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            dots: true,
            dotsClass: 'dots'
          }
        }
      ]
    }

    this.slider = null
  }

  setSlider = (element) => {
    this.slider = element
  }

  prevSlide = () => {
    console.log('Hello')
    this.slider && this.slider.slickPrev()
  }

  nextSlide = () => {
    this.slider && this.slider.slickNext()
  }

  render() {
    const { className, images } = this.props
    return (
      <div className={className}>
        <Slider
          className='roa-slider'
          ref={this.setSlider}
          {...this.config}>
          {images.map((image, index) => {
            return (
              <InlineImage
                key={index}
                alt={image.alt}
                src={image.src} />
            )
          })}
        </Slider>
        <Chevron left onClick={this.prevSlide} />
        <Chevron right onClick={this.nextSlide} />
      </div>
    )
  }
}


BaseROASlider.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array
}

/** @component */
export default BaseROASlider
