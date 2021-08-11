import styled from 'styled-components'
import { spacers } from 'utils/spacing'

function calculateSpace (value) {
  if (value) {
    return spacers[value]
  }
  return 0
}

const Padding = styled.div`
  padding-top: ${props => calculateSpace(props.t || props.y)}
  padding-bottom: ${props => calculateSpace(props.b || props.y)}
  padding-left: ${props => calculateSpace(props.l || props.x)}
  padding-right: ${props => calculateSpace(props.r || props.x)}
`

/** @component */
export default Padding
