import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const columns = css`
  grid-column: ${props => props.columnStart} / ${ props => props.columnEnd};
`

const NavigationRegion = styled.aside`
  ${props => (props.columnEnd && props.columnStart) && columns}
  grid-template-columns: [links] repeat(${props =>
    (Array.isArray(props.children) && props.children.length > 3)
    ? props.children.length
    : props.columns}, 1fr);
  text-transform: uppercase;
  display: grid;
  align-content: center;
  height: 60px;
  > * {
    display: flex;
    align-content: center;
  }
`

NavigationRegion.propTypes = {
  columnEnd: PropTypes.number,
  columnStart: PropTypes.number,
  columns: PropTypes.number.isRequired
}

NavigationRegion.defaultProps = {
  columns: 3
}

/** @component */
export default NavigationRegion
