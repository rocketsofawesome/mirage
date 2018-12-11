import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import CallToActionLink from 'subscription/components/CallToActionLink'
import ProductSlide from 'subscription/components/ProductSlide'
import CircleChev from 'components/icons/CircleChev'
import styled from 'styled-components'

class ClothingCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.slider = null
    this.setSlider = this.setSlider.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
  }

  setSlider (element) {
    this.slider = element
  }

  prevSlide () {
    this.slider && this.slider.slickPrev()
  }

  nextSlide () {
    this.slider && this.slider.slickNext()
  }
  render () {
    const {className, gender, carousels} = this.props
    const carousel = carousels[gender]
    const settings = {
      arrows: true,
      centerMode: false,
      dots: false,
      infinite: false,
      lazyLoad: 'progressive',
      prevArrow: <CircleChev left />,
      nextArrow: <CircleChev right />,
      slidesToShow: 2,
      slidesToScroll: 2,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1116,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1008,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className={className}>
        {gender &&
          <Slider ref={this.setSlider} {...settings}>
            {carousel.slides.map((slide, i) => {
              return (
                slide.name === 'cta'
                  ? <CallToActionLink slide={slide} key={i} />
                  : <ProductSlide slide={slide} key={i} />
              )
            })}
          </Slider>
        }
      </div>
    )
  }
}

ClothingCarousel.propTypes = {
  carousels: PropTypes.object,
  className: PropTypes.string,
  gender: PropTypes.string
}

export default styled(ClothingCarousel)`
  width: 100%;
  padding-top: 329px;
  margin-top: 15px;
  position: relative;
  @media (min-width: 1009px) {
    margin-top: 40px;
    padding-top: 430px;
  }
  @media (min-width: 1850px) {
    padding-top: 550px;
  }
  .slick-slider {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    padding: 0 5px;
    padding: 0 5px;
    height: auto;
    height: 309px;
    @media (min-width: 1009px) {
      height: 400px;
      padding: 0 10px;
    }
    @media (min-width: 1850px) {
      height: 530px;
    }
    > div {
      height: 100%;
    }
  }
  ${CircleChev} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  .slick-arrow.slick-disabled  {
    opacity: 0;
  }
  @media (max-width: 1009px) {
    .slick-next {
      right: 0;
    }
    .slick-prev {
      left: 0;
    }
  }
`
