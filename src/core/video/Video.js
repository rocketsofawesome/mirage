import React from 'react'
import PropTypes from 'prop-types'
import Source from './sources.base'

const Video = ({children, source: inSource, ...props}) => {
  let sources = []
  if (inSource) {
    sources = new Source(inSource).render()
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
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
}

Video.defaultProps = {
  autoPlay: true,
  loop: true,
  muted: true
}

/** @component */
export default Video
