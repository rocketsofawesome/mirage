import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationRegion = styled.aside`
  grid-template-columns: [links] repeat(${props => props.columns
    ? props.columns
    : Array.isArray(props.children)
    ? props.children.length
    : 1}, ${props => props.spacing});
  text-transform: uppercase;
  display: grid;
  align-content: center;
  height: 60px;
  align-items: center;
  justify-content: center;
  > * {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`

NavigationRegion.propTypes = {
  columns: PropTypes.number,
  spacing: PropTypes.string
}

NavigationRegion.defaultProps = {
  spacing: '1fr'
}

/** @component */
export default NavigationRegion
