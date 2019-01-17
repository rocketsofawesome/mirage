import React from 'react'
import PropTypes from 'prop-types'
import Source from './sources.base'

const Video = ({children, sources: inSources, ...props}) => {
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

Video.propTypes = {
  sources: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

Video.defaultProps = {
  autoPlay: true,
  playsInline: true,
  inline: true,
  loop: true,
  muted: true
}

/** @component */
export default Video
