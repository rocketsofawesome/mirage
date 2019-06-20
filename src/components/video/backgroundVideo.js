import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import { InlineImage, Video } from 'SRC'
import { withTheme } from 'styled-components'

class BaseBackgroundVideo extends React.Component {
  render () {
    const {
      className,
      children,
      mobileFallback,
      desktopFallback,
      sources,
      theme
    } = this.props
    return (
      <section className={className}>
         <MediaQuery query={theme.breakpoints.aboveTabletMax}>
           <Video
            sources={sources.desktop}
            aria-hidden>
              {desktopFallback && <InlineImage {...desktopFallback} />}
            </Video>
          </MediaQuery>
          <MediaQuery query={theme.breakpoints.belowTabletMax}>
            <Video
             sources={sources.mobile}
             aria-hidden>
             {mobileFallback &&
               <InlineImage
               className='roa-video-fallback'
               {...mobileFallback} />
             }
             </Video>
          </MediaQuery>
        <article>{children}</article>
      </section>
    )
  }
}

const BackgroundVideo = styled(BaseBackgroundVideo)`
  position: relative;
  ${Video} {
    width: 100%;
    object-fit: fill;
  }
  .roa-video-fallback {
    width: 100%;
  }
  > article {
    position: relative;
  }
`

BackgroundVideo.propTypes = {
  sources: PropTypes.object,
  mobileFallback: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  desktopFallback: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  videoPosition: PropTypes.string
}

/** @component */
export default withTheme(BackgroundVideo)
