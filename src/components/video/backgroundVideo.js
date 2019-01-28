import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Video } from 'SRC/core/video'

const BaseBackgroundVideo = ({className, children, sources, ...props}) => {
  return (
    <section className={className} {...props}>
      <Video sources={sources} />
      <article>{children}</article>
    </section>
  )
}

const BackgroundVideo = styled(BaseBackgroundVideo)`
  position: relative;
  > video {
    width: 100%;
  }
  > article {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100%;
  }
`

BackgroundVideo.propTypes = {
  sources: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}

/** @component */
export default BackgroundVideo
