import styled from 'styled-components'

import Link from '../link/Link'

const DefaultSection = styled.section`
  border-radius: 0.1875em;
  padding: 1.25em;
  background-color: ${props => props.theme.colors.gray[2]};
  position: relative;
  float: left;
  width: 100%;
  box-sizing: border-box;

  > ${Link} {
    position: absolute;
    top: 0.9375em;
    right: 1.25em;
  }
  main {
    margin-top: 2.5em;
  }
`

/** @component */
export default DefaultSection
