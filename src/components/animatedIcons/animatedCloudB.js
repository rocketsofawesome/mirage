import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite, Linear } from 'gsap/umd/TweenMax'

import cloudinary from 'services/cloudinary'

export class BaseAnimatedCloudB extends React.Component {
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
        .to(this.animatedCloud, 0, {transform: 'translate(50%, 50%)'})
        .to(this.animatedCloud, 40, {
          transform: 'translate(-100vw, 50%)',
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
          src={cloudinary.url('web/CLOUD_B')} />
      </div>
    )
  }
}

BaseAnimatedCloudB.defaultProps = {
  width: '15%'
}

BaseAnimatedCloudB.propTypes = {
  width: PropTypes.string
}

const AnimatedCloudB = styled(BaseAnimatedCloudB)`
  position: absolute;
  right: 0;
  top: 30%;
  width: auto;
  height: 100px;
  transform: translate(50%, 50%);
  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    top: 40%;
  `}
  > img {
    height: 100%;
  }
`

/** @component */
export default AnimatedCloudB
