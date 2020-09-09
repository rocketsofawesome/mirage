import styled from 'styled-components'

const ErrorMessage = styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.flameOrange};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 2px;
  min-height: 18px;
  line-height: 18px;
`

export default ErrorMessage
