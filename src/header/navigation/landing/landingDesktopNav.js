import styled from 'styled-components'
import { AIcon, Logo } from '../../../icons'
import NavigationRegion from '../navigationRegion'
import Link from '../../../link'
import { Button } from '../../../inputs'
const LandingDesktopNav = styled.header`
  background-color: ${props => props.theme.colors.rocketBlue};
  height: 80px;
  max-width: 100vw;
  display: grid;
  grid-template-columns: [icon] 80px [logo] 411px [links] auto;
  grid-auto-flow: column;
  align-items: center;
  ${AIcon} {
    justify-self: center;
  }
  ${NavigationRegion} {
    justify-self: flex-end;
    border: 1px solid blue;
    ${Button}, ${Link} {
      margin-right: 25px;
    }
  }
`

/** @component */
export default LandingDesktopNav
