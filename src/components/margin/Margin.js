import styled from 'styled-components'
import { spacers } from 'utils/spacing'

function calculateSpace (value) {
  if (value) {
    return spacers[value]
  }
  return 0
}

const Margin = styled.div`
  margin-top: ${props => calculateSpace(props.t || props.y)}
  margin-bottom: ${props => calculateSpace(props.b || props.y)}
  margin-left: ${props => calculateSpace(props.l || props.x)}
  margin-right: ${props => calculateSpace(props.r || props.x)}
`

/** @component */
export default Margin
