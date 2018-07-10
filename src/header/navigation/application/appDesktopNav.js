import styled from 'styled-components'
import PropTypes from 'prop-types'

const DesktopNav = styled.header`
  display: grid;
  align-content: center;
  box-sizing: border-box;

  width: 923px;
  height: 60px;
  margin: 0 auto;

  color: ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors[props.colors]};

  font-family: ${props => props.theme.fonts.primaryFont};

  grid-template-columns:
    [left-links] repeat(3, 1fr)
    [logo] 458px
    [right-links] repeat(3, 1fr);
  > h1, a, label, svg {
    height: 60px;
    display: flex;
    align-items: center;
  }
  > aside {
    width: 100%;
  }
  > * {
    justify-self: center;
    text-align: center;
    &:nth-child(1n) {
      grid-column: 1 / 4;
    }
    &:nth-child(2n) {
      justify-self: center;
      grid-column: 4 / 5;
    }
    &:nth-child(3n) {
      grid-column: 5 / 8;
    }
  }
`

DesktopNav.propTypes = {
  color: PropTypes.string
}

/** @component */
export default DesktopNav
