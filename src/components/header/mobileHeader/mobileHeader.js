import styled from 'styled-components'

const MobileHeader = styled.header`
  min-height: 4.8rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0.2rem 0.1rem 0 rgba(0,0,0,.16);
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
`

/** @component */
export default MobileHeader
