import PropTypes from 'prop-types'
import styled from 'styled-components'

const MobileNav = styled.header`
  position: ${props => props.position};
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: grid;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.colors.white};
  grid-template-columns: [hamburger] 32px [logo] auto [bag] 20px;
  padding: 0 15px;
  align-items: center;
  box-sizing: border-box;
`
MobileNav.propTypes = {
  position: PropTypes.string.isRequired
}

MobileNav.defaultProps = {
  position: 'fixed'
}
/** @component */
export default MobileNav
