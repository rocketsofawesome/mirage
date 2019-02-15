import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { withTheme } from 'styled-components'
import Source from './sources.base'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.video = null
    this.state = {
      videoSrc: null
    }
  }

  setVideoRef = (element) => {
    this.video = element
    if (element) {
      this.setState({
        videoSrc: element.children[0].src
      })
    }
  }

  componentDidMount () {
    if (this.video) {
      this.video.load()
      this.setState({
        videoSrc: this.video.children[0].src
      })
      this.video.play()
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.video && (prevState.videoSrc !== this.state.videoSrc)) {
      this.video.load()
      this.video.play()
    }
  }

  render () {
    const {children, sources: inSources, mobileFallback, desktopFallback, theme, ...props} = this.props
    let mobileSources = []
    let desktopSources = []
    if (inSources) {
      mobileSources = new Source(inSources[0]).render()
      desktopSources = new Source(inSources[768]).render()
    }
    return (
      <div>
        <MediaQuery query={theme.breakpoints.aboveTabletMax}>
          <video poster={desktopFallback} ref={this.setVideoRef} {...props}>
            {desktopSources.map((source, key) => source)}
            {desktopFallback && <img src={desktopFallback} alt='Desktop Fallback'/>}
            {children && children}
          </video>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 959px)">
          <video poster={mobileFallback} ref={this.setVideoRef} {...props}>
            {mobileSources.map((source, key) => source)}
            {mobileFallback && <img src={mobileFallback} alt='Mobile Fallback'/>}
            {children && children}
          </video>
        </MediaQuery>
      </div>
    )
  }
}

Video.propTypes = {
  sources: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  mobileFallback: PropTypes.string,
  desktopFallback: PropTypes.string,
  theme: PropTypes.object
}

Video.defaultProps = {
  autoPlay: true,
  playsInline: true,
  loop: true,
  muted: true
}

/** @component */
export default withTheme(Video)
