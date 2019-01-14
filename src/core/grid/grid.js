import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const TwelveColGrid = css`
  grid-template-columns:
    repeat(${props => props.theme.grid.columns.desktop}, 1fr);
  max-width: 144rem;
  margin: ${props => props.theme.grid.gutter}rem ${props => props.theme.grid.margins.desktop};
`

const Grid = styled(
  ({className, children}) => {
    return(<div className={className}>{children}</div>)
  }
)`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => props.theme.grid.gutter}rem ${props => props.theme.grid.margins.mobile};
  @supports (display:grid) {
    max-width: 100%;
    grid-gap: ${props => props.theme.grid.gutter}rem;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns:
      repeat(${props => props.theme.grid.columns.mobile}, 1fr);
    ${props => props.theme.media.tablet`${TwelveColGrid}`}
    ${props => props.debug &&
      `> * {
        background-color: hsl(200, 33%, 96%);
      }`
    }
  }
`

Grid.propTypes = {
  debug: PropTypes.bool,
  theme: PropTypes.shape({
    media: PropTypes.shape({
      tablet: PropTypes.func,
      desktop: PropTypes.func
    }),
    grid: PropTypes.shape({
      columns: PropTypes.shape({
        mobile: PropTypes.number,
        tablet: PropTypes.number,
        desktop: PropTypes.number
      }),
      gutter: PropTypes.string,
      margins: PropTypes.shape({
        mobile: PropTypes.number,
        tablet: PropTypes.number,
        desktop: PropTypes.number
      })
    })
  }),
}


/** @component */
export default Grid
