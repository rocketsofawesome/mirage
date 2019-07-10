import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite, Linear } from 'gsap/umd/TweenMax'

import cloudinary from 'SRC/services/cloudinary'

export default class AnimatedBalloon extends React.Component {
  constructor (props) {
    super(props)
    this.animatedBalloon = null
    this.timeline = null
  }

  setBalloonRef = (element) => {
    this.animatedBalloon = element
  }

  componentDidMount () {
    const { desktopAnimation } = this.props
    if (this.animatedBalloon && desktopAnimation) {
      this.timeline = new TimelineLite({onComplete: function () {
        this.restart()
      }})
      this.timeline
        .to(this.animatedBalloon, 0, {transform: 'translate(150%, 0%)'})
        .to(this.animatedBalloon, 3, {transform: 'translate(10%, -50%) rotate(-25deg)'})
        .to(this.animatedBalloon, 5, {
          transform: 'translate(10%, -200%) rotate(25deg)',
          ease: Linear.easeNone
        })
        .to(this.animatedBalloon, 4, {transform: 'translate(150%, -250%) rotate(65deg)'})
        .to(this.animatedBalloon, 5, {transform: 'translate(150%, -250%) rotate(45deg)'})
    } else {
      this.timeline = new TimelineLite({onComplete: function () {
        this.restart()
      }})
      this.timeline
        .to(this.animatedBalloon, 0, {transform: 'translate(250%, 0%)'})
        .to(this.animatedBalloon, 3, {transform: 'translate(10%, -50%) rotate(-25deg)'})
        .to(this.animatedBalloon, 5, {
          transform: 'translate(10%, -200%) rotate(25deg)',
          ease: Linear.easeNone
        })
        .to(this.animatedBalloon, 4, {transform: 'translate(250%, -250%) rotate(65deg)'})
        .to(this.animatedBalloon, 5, {transform: 'translate(250%, -250%) rotate(45deg)'})
    }
  }

  render () {
    return (
      <img
        alt='Ballon'
        aria-hidden
        ref={this.setBalloonRef}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: this.props.width,
          maxWidth: '254px'
        }}
        src={cloudinary.url('web/BALLOON')} />
    )
  }
}

AnimatedBalloon.defaultProps = {
  desktopAnimation: false,
  width: '15%'
}

AnimatedBalloon.propTypes = {
  desktopAnimation: PropTypes.bool,
  width: PropTypes.string
}
