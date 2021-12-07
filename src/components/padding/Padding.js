import styled from 'styled-components'
import { spacers } from 'utils/spacing'

function calculateSpace(value) {
  return value in spacers ? spacers[value] : value
}

const Padding = styled.div`
  padding-top: ${props => calculateSpace(props.t || props.y)}
  padding-bottom: ${props => calculateSpace(props.b || props.y)}
  padding-left: ${props => calculateSpace(props.l || props.x)}
  padding-right: ${props => calculateSpace(props.r || props.x)}
`

Padding.defaultProps = {
  x: 0,
  y: 0
}

/** @component */
export default Padding
