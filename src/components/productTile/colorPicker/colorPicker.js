import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseColorPicker from './colorPicker.base'

const ColorPicker = styled(BaseColorPicker)`
  font-size: 0;
  margin-left: 0.5rem;
  img {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    padding: 0.2rem;
    border: 1px solid;
    border-color: transparent;
    &:hover {
      border-color:  ${props => props.theme.colors.gray[4]};
      cursor: pointer;
    }
  }
  input:checked + img {
    border-color:  ${props => props.theme.colors.gray[6]};
  }
  input {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }
`

ColorPicker.propTypes = {

}

/** @component */
export default ColorPicker
