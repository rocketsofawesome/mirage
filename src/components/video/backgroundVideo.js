import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Video } from 'SRC/core/video'
import { withSize } from 'react-sizeme'

class BaseBackgroundVideo extends React.Component {
  render () {
    const { className, children, mobileFallback, desktopFallback, sources } = this.props
    return (
      <section className={className}>
        <Video sources={sources} mobileFallback={mobileFallback} desktopFallback={desktopFallback} />
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
