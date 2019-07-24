import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import cloudinary from 'services/cloudinary'
import { InlineImage, Chevron } from 'SRC'

export class BaseROASlider extends Component {
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

  onMouseEnter = () => {
    this.slider && this.slider.slickGoTo(1, true)
  }

  onMouseLeave = ()  => {
      this.slider && this.slider.slickGoTo(0, true)
  }

  setSlider = (element) => {
    this.slider = element
  }

  prevSlide = () => {
    this.slider && this.slider.slickPrev()
  }

  nextSlide = () => {
    this.slider && this.slider.slickNext()
  }

  render() {
    const { className, images, renderLink, target, ...props } = this.props
    const Link = renderLink
    return (
      <div
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <Slider
          className='roa-slider'
          ref={this.setSlider}
          {...this.config}>
          {images.map((image, index) => {
            if (renderLink && target) {
              return (
                <Link target={target}>
                  <InlineImage
                  key={index}
                  alt={image.alt}
                  src={cloudinary.url(image.src, {
                    transformation: 'plp_product_shot',
                    format: 'jpg'
                  })}
                  {...props}
                   />
                </Link>
              )
            } else {
              return (
                <InlineImage
                  key={index}
                  alt={image.alt}
                  src={cloudinary.url(image.src, {
                    transformation: 'plp_product_shot',
                    format: 'jpg'
                  })} />
              )
            }
          })}
        </Slider>
        {(images.length > 1) &&
          <div>
            <Chevron left onClick={this.prevSlide} />
            <Chevron right onClick={this.nextSlide} />
          </div>
        }
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
