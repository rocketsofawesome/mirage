import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import cloudinary from 'services/cloudinary'
import { InlineImage, Chevron } from 'SRC'

export class BaseROASlider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSlide: 0,
      transition: false
    }

    this.config = {
      infinite: true,
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
      ],
      beforeChange: (current, next) => {
        this.setState({
          currentSlide: next,
          transition: true
        })
      },
      afterChange: () => this.setState({ transition: false })
    }
    
    if (props.sliderLazyLoad) {
      this.config.lazyLoad = props.sliderLazyLoad
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

  isVisible = (index) => {
    if (this.state.currentSlide === index) return true

    return this.state.transition
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
                  visible={this.isVisible(index)}
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
  images: PropTypes.array,
  sliderLazyLoad: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

BaseROASlider.defaultProps = {
  sliderLazyLoad: 'progressive'
}

/** @component */
export default BaseROASlider
