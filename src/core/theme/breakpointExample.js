import styled from 'styled-components'

/** @component */
export default styled.div`
  width: 300px;
  height: 300px;
  ${props => props.theme.media.phone`background-color: green;`}
  ${props => props.theme.media.tablet`background-color: blue;`}
  ${props => props.theme.media.desktop`background-color: red;`}
`
