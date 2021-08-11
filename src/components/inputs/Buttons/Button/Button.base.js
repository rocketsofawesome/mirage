import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const CustomButton = ({
  checkmark: Checkmark,
  children,
  loading,
  selected,
  showCheckmark,
  spinner: Spinner,
  ...props
}) => {
  delete props.width
  delete props.sentanceCase
  delete props.block
  return (
    <button {...props}>
      <span>
        {(selected && (showCheckmark && Checkmark)) && <Checkmark />}
        {!loading && children}
        {loading && <Spinner size='4rem'/>}
      </span>
    </button>
  )
}

const setWidth = css`
  width: ${props => props.width};
`

const pointerCursor = css`
  cursor: pointer;
  > * {
    cursor: pointer;
  }
`

const waitCursor = css`
  cursor: wait;
  > * {
    cursor: wait;
  }
`

const notAllowedCursor = css`
  cursor: not-allowed;
  > * {
    cursor: not-allowed;
  }
`

const setCursor = css`
  ${props => (!props.loading && !props.disabled) && pointerCursor}
  ${props => props.loading && waitCursor}
  ${props => props.disabled && notAllowedCursor
  }
`

const BaseButton = styled(CustomButton)`
  box-sizing: border-box;
  height: ${props => props.height};
  ${props => props.width && setWidth}
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
    ${props => setCursor}
  }

  :focus {
    outline: 0;
  },

  :active {
    border-style: solid;
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


const buttonPropCheck = (props, propName, componentName) => {
  if (props.disabled && props.loading) {
    return new Error(`You have both the disabled and loading props set in ${componentName}, please only set one or neither of these props at a time.`)
  }
  return null
}

BaseButton.propTypes = {
  buttonPropCheck,
  checkmark: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  sentanceCase: PropTypes.bool,
  spinner: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  width: PropTypes.string,
  height: PropTypes.string
}

BaseButton.defaultProps = {
  height: '50px'
}

export default BaseButton
export {
  buttonPropCheck,
  CustomButton,
  notAllowedCursor,
  pointerCursor,
  setCursor,
  setWidth,
  waitCursor
}
