import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const DesktopSizer = css`
  width: calc((100% * (${props => props.desktop.width}/${props => props.theme.grid.columns.desktop})) - 2rem);
  box-sizing: border-box;
  margin: 0 ${props => props.theme.grid.gutter / 2}rem;
  @supports (display:grid) {
    width: auto;
    margin: 0;
    ${props => (props.desktop.start) ? `grid-column-start: ${props.desktop.start};` : ''}
    grid-column-end: ${
      props => {
        if (props.desktop.start) {
          return props.desktop.start + props.desktop.width
        } else {
          return `span ${props.desktop.width}`
        }
      }
    };
  }
`

const desktopFallback = (props, key) => {
  if (props.tablet && props.tablet[key]) {
    return props.tablet[key]
  }
  return props.desktop[key]
}

const TabletSizer = css`
  width: calc((100% * (${props => desktopFallback(props, 'width')}/${props => props.theme.grid.columns.tablet})) - 2rem);
  box-sizing: border-box;
  margin: 0 ${props => props.theme.grid.gutter / 2}rem;
  @supports (display:grid) {
    width: auto;
    margin: 0;
    ${props => (desktopFallback(props, 'start')) ? `grid-column-start: ${desktopFallback(props, 'start')};` : ''}
    grid-column-end: ${
      props => {
        if (desktopFallback(props, 'start')) {
          return desktopFallback(props, 'start') + desktopFallback(props, 'width')
        } else {
          return `span ${desktopFallback(props, 'width')}`
        }
      }
    };
  }
`
const Sizer = styled.div`
  width: calc((100% * (${props => props.mobile.width}/${props => props.theme.grid.columns.mobile})) - 2rem);
  box-sizing: border-box;
  margin: 0 ${props => props.theme.grid.gutter / 2}rem;
  @supports (display:grid) {
    width: auto;
    margin: 0;
    ${props => (props.mobile.start) ? `grid-column-start: ${props.mobile.start};` : ''}
    grid-column-end: ${
      props => {
        if (props.mobile.start) {
          return props.mobile.start + props.mobile.width
        } else {
          return `span ${props.mobile.width}`
        }
      }
    };
    ${props => props.theme.media.tablet`${TabletSizer}`}
    ${props => props.theme.media.desktop`${DesktopSizer}`}
  }
`

Sizer.defaultProps = {
  desktop: {
    width: 12,
  },
  mobile: {
    width: 4
  }
}

Sizer.propTypes = {
  desktop: PropTypes.shape({
    width: PropTypes.number,
    start: PropTypes.number
  }),
  mobile: PropTypes.shape({
    width: PropTypes.number,
    start: PropTypes.number
  })
}

/** @component */
export default Sizer
