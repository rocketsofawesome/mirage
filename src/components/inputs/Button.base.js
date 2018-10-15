import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from 'SRC/core/icons/Spinner'
import Checkmark from 'SRC/core/icons/Checkmark'

const CustomButton = ({loading, children, selected, checkmark, ...props}) => {
  return (
    <button {...props}>
      <span>
        {selected && checkmark  && <Checkmark />}
        {!loading && children}
        {loading && <Spinner size='4rem'/>}
      </span>
    </button>
  )
}

const BaseButton = styled(CustomButton)`
  box-sizing: border-box;
  height: 50px;
  ${props => props.width ? `width: ${props.width};` : ''}
  padding: 0 01.5rem;

  text-align: center;

  letter-spacing: 1px;
  ${props => props.sentanceCase
    ? 'text-transform: inherit;'
    : 'text-transform: uppercase;'
  }

  border-radius: .2rem;

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 1.4rem;
  font-weight: 500;

  transition:
    background-color 0.25s ease-in,
    border-color 0.25s ease-in,
    color 0.25s ease-in;

  ${Spinner} {
    display: inline-block;
  }

  ${Checkmark} {
    margin-top: -0.5rem;
  }

  :hover {
    ${props => (props.disabled || props.loading ) ? '' : 'cursor: pointer;'}
  }

  :focus {
    outline: 0;
  },

  :active {
    border-style: solid;
    transform: translateX(.2rem);
  }
  > span {
    display: inline-block;
    > * {
      vertical-align: middle;
    }
  }
`

BaseButton.propTypes = {
  sentanceCase: PropTypes.bool,
  width: PropTypes.string
}

export default BaseButton
