import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { withTheme } from 'styled-components'
import Source from './sources.base'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.video = null
  }

  setVideoRef = (element) => {
    this.video = element
  }

  render () {
    const {children, sources: inSources, mobileFallback, desktopFallback, theme, ...props} = this.props
    let sources = []
    if (inSources) {
      sources = new Source(inSources).render()
    }
    return (
      <div>
        <MediaQuery query={theme.breakpoints.aboveTabletMax}>
          <video poster={desktopFallback} ref={this.setVideoRef} {...props}>
            {sources.map((source, key) => {
              return source
            })}
            {desktopFallback && <img src={desktopFallback} alt='Desktopu Fallback'/>}
            {children && children}
          </video>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 959px)">
          <video poster={mobileFallback} ref={this.setVideoRef} {...props}>
            {sources.map((source, key) => {
              return source
            })}
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
    PropTypes.array
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
