import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Video } from 'SRC/core/video'
import { withSize } from 'react-sizeme'

class BaseBackgroundVideo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSources: undefined
    }
    this.backgroundVideo = null
  }

  setResponsiveBackground = () => {
    const { size: { width }, sources } = this.props
    const { currentSources } = this.state
    if (sources) {
      const newSources = sources[Object.keys(sources)
      .sort((keyA, keyB) => keyA-keyB)
      .reverse()
      .find((key) => {
        return(key < width)
      })]
      if(currentSources !== newSources) {
        this.setState({
          currentSources: newSources
        })
        if (this.backgroundVideo && this.backgroundVideo.video) {
          this.backgroundVideo.video.load()
          this.backgroundVideo.video.play()
        }
      }
    }
  }

  setVideo = (element) => {
    this.backgroundVideo = element
  }

  componentDidMount () {
    this.setResponsiveBackground()
  }

  componentDidUpdate() {
    this.setResponsiveBackground()
  }

  render () {
    const { className, children, mobileFallback, desktopFallback } = this.props
    const { currentSources } = this.state
    return (
      <section className={className}>
        <Video ref={this.setVideo} sources={currentSources} mobileFallback={mobileFallback} desktopFallback={desktopFallback} />
        <article>{children}</article>
      </section>
    )
  }
}

const BackgroundVideo = styled(BaseBackgroundVideo)`
  position: relative;
  > div > video {
    width: 100%;
  }
  > article {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

BackgroundVideo.propTypes = {
  sources: PropTypes.object,
  mobileFallback: PropTypes.string,
  desktopFallback: PropTypes.string
}

export { BackgroundVideo }

/** @component */
export default withSize()(BackgroundVideo)
