import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Source from './sources.base'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.video = null
  }

  setVideoRef = (element) => {
    this.video = element
  }

  componentDidMount () {
    if (this.video) {
      this.video.load()
      this.video.play()
    }
  }

  render () {
    const {children, sources: inSources, ...props} = this.props
    let sources = []
    if (inSources) {
      sources = new Source(inSources).render()
    }
    return (
      <video {...props}>
        {sources.map((source, key) => {
          return source
        })}
        {children && children}
      </video>
    )
  }
}

Video.propTypes = {
  sources: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

Video.defaultProps = {
  autoPlay: true,
  playsInline: true,
  loop: true,
  muted: true
}

/** @component */
export default styled(Video)``
