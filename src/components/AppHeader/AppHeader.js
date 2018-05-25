import PropTypes from 'prop-types'
import styled from 'styled-components'

const AppHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.rocketBlue};
  font-family: ${props => props.theme.fonts.primaryFont};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
/** @component */
export default AppHeader
