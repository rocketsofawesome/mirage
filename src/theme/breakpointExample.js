import styled from 'styled-components'
import media from './breakpoints'

/** @component */
export default styled.div`
  width: 300px;
  height: 300px;
  ${media.phone`background-color: green;`}
  ${media.tablet`background-color: blue;`}
  ${media.desktop`background-color: red;`}
`
