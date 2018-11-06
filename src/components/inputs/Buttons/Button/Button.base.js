import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WhiteCheckmark } from 'SRC/core/icons/Checkmark'
import { GraySpinner } from 'SRC/core/icons/Spinner'

const CustomButton = ({
  checkmark,
  children,
  loading,
  selected,
  showCheckmark,
  spinner,
  ...props
}) => {
  const Spinner = spinner
  const Checkmark = checkmark
  return (
    <button {...props}>
      <span>
        {(selected && showCheckmark) && <Checkmark />}
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

  ${props => props.spinner} {
    display: inline-block;
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
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      vertical-align: middle;
    }
  }
`

BaseButton.propTypes = {
  sentanceCase: PropTypes.bool,
  width: PropTypes.string
}

BaseButton.defaultProps = {
  checkmark: WhiteCheckmark,
  spinner: GraySpinner
}

export default BaseButton
export { CustomButton }
