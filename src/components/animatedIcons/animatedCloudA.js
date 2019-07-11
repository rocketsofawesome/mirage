import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite, Linear } from 'gsap/umd/TweenMax'

import cloudinary from 'SRC/services/cloudinary'

export class BaseAnimatedCloudA extends React.Component {
  constructor (props) {
    super(props)
    this.animatedCloud = null
    this.timeline = null
  }

  setBalloonRef = (element) => {
    this.animatedCloud = element
  }

  componentDidMount () {
    if (this.animatedCloud) {
      this.timeline = new TimelineLite({onComplete: function () {
        this.restart()
      }})
      this.timeline
        .to(this.animatedCloud, 0, {
          transform: 'translate(0%, 0%)',
          ease: Linear.easeNone
        })
        .to(this.animatedCloud, 30, {
          transform: 'translate(100vw, 0%)',
          ease: Linear.easeNone
        })
        .to(this.animatedCloud, 0, {
          transform: 'translate(-100vw, 0%)',
          ease: Linear.easeNone
        })
        .to(this.animatedCloud, 30, {
          transform: 'translate(0%, 0%)',
          ease: Linear.easeNone
        })
    }
  }

  render () {
    const { className } = this.props
    return (
      <div
        className={className}
        ref={this.setBalloonRef}>
        <img
          aria-hidden
          alt='Cloud'
          src={cloudinary.url('web/CLOUD_A')} />
      </div>
    )
  }
}

BaseAnimatedCloudA.defaultProps = {
  width: '15%'
}

BaseAnimatedCloudA.propTypes = {
  width: PropTypes.string
}

const AnimatedCloudA = styled(BaseAnimatedCloudA)`
  position: absolute;
  top: 30%;;
  left: 0px;
  width: auto;
  height: 100px;
  max-width: 684px;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    height: 150px;
  `}
  > img {
    height: 100%;
  }
`

/** @component */
export default AnimatedCloudA
