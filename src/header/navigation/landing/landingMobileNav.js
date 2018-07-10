import styled from 'styled-components'

const LandingMobileNav = styled.header`
  height: 40px;
  display: flex;
  border-bottom: 2px solid ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.rocketBlue};
  max-width: 100vw;
  width: 100%;
  position: ${props => props.theme.fixedPosition};
  align-items: center;
  justify-content: center;
  & > *:first-child {
    justify-self: flex-start;
    position: absolute;
    left: 10px;
  }
`

/** @component */
export default LandingMobileNav
