import styled from 'styled-components'

const DesktopHeader = styled.header`
  background-color: ${props => props.theme.colors.white};
  min-height: 6rem;
  width: 100%;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,.16);
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
`

/** @component */
export default DesktopHeader
