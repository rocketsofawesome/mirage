import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from '../icons/Spinner'
import Checkmark from '../icons/Checkmark'

const CustomButton = ({loading, children, selected, checkmark, ...props}) => {
  return (
    <button {...props}>
      {selected && checkmark  && <Checkmark />}
      {!loading && children}
      {loading && <Spinner />}
    </button>
  )
}

const BaseButton = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  height: 50px;
  ${props => props.width ? `width: ${props.width};` : ''}
  padding: 0 0.9375em;

  text-align: center;

  letter-spacing: 1px;
  ${props => props.sentanceCase
    ? 'text-transform: inherit;'
    : 'text-transform: uppercase;'
  }

  border-radius: 2px;

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 500;

  transition:
    background-color 0.25s ease-in,
    border-color 0.25s ease-in,
    color 0.25s ease-in;

  ${Spinner} {
    height: 100%;
  }

  :hover {
    ${props => (props.disabled || props.loading ) ? '' : 'cursor: pointer;'}
  }

  :focus {
    outline: 0;
  },

  :active {
    border-style: solid;
    transform: translateX(2px);
  }
`

BaseButton.propTypes = {
  sentanceCase: PropTypes.bool,
  width: PropTypes.string
}

export default BaseButton
