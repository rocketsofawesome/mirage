import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import { InlineImage, Video } from 'SRC'
import { withTheme } from 'styled-components'

class BaseBackgroundVideo extends React.Component {
  render () {
    const { className, children, mobileFallback, desktopFallback, sources, theme } = this.props
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
  ${Video} {
    width: 100%;
  }
  .roa-video-fallback {
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

/** @component */
export default withTheme(BackgroundVideo)
