import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { InlineImage, Chevron } from 'SRC'

export class BaseROASlider extends Component {
  constructor (props) {
    super(props)
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
      afterChange: () => {
        // Let mobile user tap once (instead of twice), to navigate to PDP
        // TODO: Wait for official fix, or move away from React Slider
        if (this.slider && this.slider.innerSlider) {
          this.slider.innerSlider.clickable = true
        }
      }
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

  render() {
    const { className, images, onClick, lazyLoad, renderLink, target } = this.props
    const Link = renderLink
    return (
      <div
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        <Slider
          className='roa-slider'
          ref={this.setSlider}
          {...this.config}
        >
          {images.map((image) => {
            if (renderLink && target) {
              return (
                <Link target={target} key={image.src}>
                  <InlineImage
                    alt={image.alt}
                    src={image.src}
                    lazyLoad={lazyLoad}
                  />
                </Link>
              )
            } else {
              return (
                <InlineImage
                  key={image.src}
                  alt={image.alt}
                  src={image.src}
                  onClick={onClick}
                  lazyLoad={lazyLoad}
                />
              )
            }
          })
          }
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
  onClick: PropTypes.func,
  sliderLazyLoad: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  target: PropTypes.string,
  renderLink: PropTypes.func
}

BaseROASlider.defaultProps = {
  sliderLazyLoad: 'progressive',
  onClick: () => null
}

/** @component */
export default BaseROASlider
