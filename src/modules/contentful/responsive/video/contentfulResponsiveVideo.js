import React from 'react'
import PropTypes from 'prop-types'

import { getUrl, getAlt } from 'SRC/services/contentful'
import { BackgroundVideo } from 'SRC'

const ContentfulResponsiveVideo = ({
  className,
  children,
  fields: {
    desktopFallbackImage,
    mobileFallbackImage,
    mobileSources,
    sources: desktopSources
  }
}) => {
  const sources = {
    desktop: desktopSources.map((source) => {
      return getUrl(source)
    })
  }
  if (mobileSources) {
    sources.mobile = mobileSources.map((source) => {
      return getUrl(source)
    })
  }
  let desktopFallback = desktopFallbackImage ? ({
    alt: getAlt(desktopFallbackImage),
    src: getUrl(desktopFallbackImage)
  }) :
  undefined

  let mobileFallback = mobileFallbackImage ? ({
    alt: getAlt(mobileFallbackImage),
    src: getUrl(mobileFallbackImage)
  }) :
  undefined

  return (
    <BackgroundVideo
      className={className}
      desktopFallback={desktopFallback}
      mobileFallback={mobileFallback}
      sources={sources}>
      {children}
    </BackgroundVideo>
  )
}

ContentfulResponsiveVideo.propTypes = {
  fields: PropTypes.object
}

/** @component */
export default ContentfulResponsiveVideo
