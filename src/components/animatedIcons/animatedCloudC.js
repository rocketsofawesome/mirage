import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { TimelineLite, Linear } from 'gsap/umd/TweenMax'

import { CloudCProps } from './defaultProps'

export class BaseAnimatedCloudC extends React.Component {
  constructor (props) {
    super(props)
    this.animatedCloud = null
    this.timeline = null
  }

  setBalloonRef = (element) => {
    console.log(element)
    this.animatedCloud = element
  }

  componentDidMount () {
    if (this.animatedCloud) {
      this.timeline = new TimelineLite({onComplete: function () {
        this.restart()
      }})
      this.timeline
        .to(this.animatedCloud, 0, {transform: 'translateX(-120%)'})
        .to(this.animatedCloud, 40, {
          ease: Linear.easeNone,
          transform: 'translateX(300%)'
        })
    }
  }

  render () {
    const { className } = this.props
    const { bodyShape, outlineShape } = CloudCProps
    return (
      <div
      ref={this.setBalloonRef}
      className={className}>
        <svg
          aria-hidden
          x='0px'
          y='0px'
          viewBox='0 0 648 330.3'>
          <path
            className='body'
            d={bodyShape} />
          <path
            className='outline'
            d={outlineShape} />
        </svg>
      </div>
    )
  }
}

const AnimatedCloudC = styled(BaseAnimatedCloudC)`
  position: absolute;
  bottom: 12%;
  left: 0;
  width: auto;
  max-width: 692px;
  height: 100px;
  ${props => props.theme.breakpointsVerbose.abovePhone`
    height: 150px;
  `}
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    height: 120px;
  `}
  svg {
    height: 100%;
  }
  .body {
    fill: ${props => props.theme.colors.white};
  }

  .outline {
    fill: #373535;
  }
`

/** @component */
export default AnimatedCloudC
