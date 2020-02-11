import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { ContentfulSlide } from 'SRC';
import { RightArrow, LeftArrow } from './sliderArrows';

const Container = styled.div`
  position: relative;
`

class ContentfulSlider extends React.Component {
  constructor(props) {
    super(props)

    this.setSlider = this.setSlider.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)

    this.config = {
      arrows: false
    }
  }

  previous() {
    this.slider && this.slider.slickPrev()
  }

  next() {
    this.slider && this.slider.slickNext()
  }

  setSlider(slider) {
    this.slider = slider
  }

  render() {
    const { fields } = this.props
    return (
      <Container>
        <Slider ref={this.setSlider} {...this.config}>
          {fields.slides.map(slide => <ContentfulSlide {...slide} />)}
        </Slider>
        <LeftArrow onClick={this.previous}/>
        <RightArrow onClick={this.next} />
      </Container>
    )
  }
}

ContentfulSlider.propTypes = {
  fields: PropTypes.object.isRequired
}

export default ContentfulSlider;
