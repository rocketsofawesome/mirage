import styled from 'styled-components'
import BaseCheckboxButton from './CheckboxButton.base'

const CheckboxButton = styled(BaseCheckboxButton)`
  position: relative;
  margin-left: 1rem;
  margin-right: 1rem;
  input {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.2rem;
    width: 6.4rem;
    border: 1px solid ${props => props.theme.colors.rocketBlue};
    border-radius: 0.2rem;
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.6rem;
    font-weight: 100;
    color: ${props => props.theme.colors.navy};
    transition: color 0.25s, background-color 0.25s;
  }

  input:checked + .button {
    background-color: ${props => props.theme.colors.rocketBlue};
    color: ${props => props.theme.colors.white};
  }
`

/** @component */
export default CheckboxButton
