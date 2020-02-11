import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import { ContentfulSlide } from 'SRC';
import { RightArrow, LeftArrow } from './sliderArrows';

const Container = styled.div`
  position: relative;
  padding-bottom: 35px;

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

    this.setSlider = this.setSlider.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)

    this.config = {
      arrows: false,
      dots: true
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
