import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const CustomButton = ({arrow, className, children, ...props}) => {
  return (
    <div className={className}>
      <button {...props}>
        {children}
        {arrow && <span className='arrow'>&rarr;</span>}
      </button>
      <span className='borderBottom' />
    </div>
  )
}

const setWidth = css`
  ${props => `width: ${props.width}`};
`

const BaseImageButton = styled(CustomButton)`
  position: relative;
  display: flex;
  ${props => setWidth}
  overflow: hidden;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    height: 30px;
    ${props => setWidth}
    padding: 0 1.5rem;

    text-align: center;

    letter-spacing: .1rem;
    ${props => props.sentanceCase
      ? 'text-transform: inherit;'
      : 'text-transform: uppercase;'
    }

    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.4rem;
    font-weight: 500;
    border: none;

    .arrow {
      margin-left: 1.2rem;
    }
  }

  > .borderBottom {
    display: block;
    height: .2rem;
    width: 100%;
    transform: translateX(-100%);
    transition transform 0.25s ease-in-out;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
  }

  :hover {
    > button {
      cursor: pointer;
    }
    > .borderBottom {
      transform: translateX(0);
      cursor: pointer;
    }
  }
`

BaseImageButton.propTypes = {
  arrow: PropTypes.bool,
  sentanceCase: PropTypes.bool,
  width: PropTypes.string
}

BaseImageButton.defaultProps = {
  width: '35rem'
}

/** @component */
export default BaseImageButton

export { CustomButton, setWidth }
