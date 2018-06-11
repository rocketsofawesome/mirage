import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const setColumns = css`
  grid-column: ${props => props.columns};
`

const setRows = css`
  grid-row: ${props => props.rows};
`

export const Item = styled.div`
  ${props => props.columns && setColumns}
  ${props => props.rows && setRows}
`
Item.propTypes = {
  /** Can be a single digit or a '/' seperated value that determines the
  where the column starts horizontially, or the column's width */
  columns: PropTypes.string,
  /** Can be a single digit or a '/' seperated value that determines the
  where the column starts vertically, or the column's height */
  rows: PropTypes.string
}

Item.defaultProps = {
  columns: 'span 1'
}

/** @component */
export default Item
