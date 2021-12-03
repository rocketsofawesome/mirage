import styled from 'styled-components'
import { spaceFromProp } from 'utils/spacing'

const Padding = styled.div`
  padding-top: ${spaceFromProp('t' || 'y')}
  padding-bottom: ${spaceFromProp('b' || 'y')}
  padding-left: ${spaceFromProp('l' || 'x')}
  padding-right: ${spaceFromProp('r' || 'x')}
`

/** @component */
export default Padding
