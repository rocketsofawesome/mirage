import styled from 'styled-components'

const LandingDesktopNav = styled.header`
  background-color: ${props => props.theme.colors.rocketBlue};
  height: 80px;
  max-width: 100vw;
  display: grid;
  grid-template-columns: [icon] 80px [logo] 411px [links] auto;
  grid-auto-flow: column;
  align-items: center;
  & > *:first-child {
    justify-self: center;
  }
  & > *:last-child {
    justify-self: flex-end;
    > * {
      margin-right: 25px;
    }
  }
`

/** @component */
export default LandingDesktopNav
