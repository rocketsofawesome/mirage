import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { ContentfulSlide } from 'SRC';
import { RightArrow, LeftArrow } from './sliderArrows';

const Container = styled.div`
  position: relative;
  margin-bottom: 4rem;

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-bottom: 6rem;
  `}

  .slick-dots {
    position: absolute;
    bottom: -25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    margin: 0 12px;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li button {
    line-height: 0;
    display: block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    padding: 0;
    outline: none;
    border-radius: 5px;
    color: transparent;
    border: 1px solid ${props => props.theme.colors.navy};
    background-color: #FFF;
    transition: background-color 200ms ease-out;
  }

  .slick-dots li.slick-active button {
    background-color: ${props => props.theme.colors.navy};
  }

  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
`

class ContentfulSlider extends React.Component {
  constructor(props) {
    super(props)

    this.isSliding = this.isSliding.bind(this)
    this.setSlider = this.setSlider.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
    this.triggerSegmentHeroViewed = this.triggerSegmentHeroViewed.bind(this)

    this.sliding = false

    this.config = {
      arrows: false,
      dots: true,
      beforeChange: (currentSlidePosition) => { this.sliding = true },
      afterChange: (currentSlidePosition) => {
        this.sliding = false
        this.triggerSegmentHeroViewed(currentSlidePosition)

        // Prevent some mobile Safari users from clicking twice (after slide) to navigate
        if (this.slider && this.slider.innerSlider) {
          this.slider.innerSlider.clickable = true
        }
      }
    }
  }

  componentDidMount() {
    // Initialize Hero Viewed with currentSlidePosition of 0 (only on client)
    if (process.browser) { this.triggerSegmentHeroViewed(0) }
  }

  setSlider(slider) {
    this.slider = slider
  }

  // Send function into ContentfulSlide, since it is only rendered once
  isSliding() {
    return this.sliding
  }

  previous() {
    this.slider && this.slider.slickPrev()
  }

  next() {
    this.slider && this.slider.slickNext()
  }

  // Trigger segmentHeroViewed on initial view and subsequent views (e.g., transition to next slide)
  triggerSegmentHeroViewed(currentSlidePosition) {
    const { fields, segmentHeroViewed } = this.props

    const currentSlide = fields.slides[currentSlidePosition]

    const assetUrl = `https:${currentSlide.fields.image.fields.defaultImage.fields.file.url}`

    let destinationUrl
    if (currentSlide.fields.url) { destinationUrl = currentSlide.fields.url }

    segmentHeroViewed(
      assetUrl,
      destinationUrl,
      currentSlide.fields.image.fields.title,
      currentSlidePosition + 1,
      fields.slides.length
    )
  }

  render() {
    const { fields, segmentHeroClicked } = this.props

    return (
      <Container>
        <Slider ref={this.setSlider} {...this.config}>
          {fields.slides.map((slide, index) => {
            return (
              <ContentfulSlide
                {...slide}
                key={slide.sys.id}
                position={index + 1}
                totalSlides={fields.slides.length}
                segmentHeroClicked={segmentHeroClicked}
                isSliding={this.isSliding}
              />
            )
          })}
        </Slider>
        <LeftArrow onClick={this.previous} />
        <RightArrow onClick={this.next} />
      </Container>
    )
  }
}

ContentfulSlider.propTypes = {
  fields: PropTypes.object.isRequired,
  segmentHeroClicked: PropTypes.func.isRequired,
  segmentHeroViewed: PropTypes.func.isRequired
}

export default ContentfulSlider;
