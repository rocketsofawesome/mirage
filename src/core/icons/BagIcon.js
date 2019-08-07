import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Default, Laptop } from 'SRC'

const BaseBagIcon = ({ className, count}) => {
  const  greaterThanZero = count > 0
  return (
    <div className={className}>
      <Default displayTarget='belowLaptop'>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M11.747 6.603H6.253a.577.577 0 0 1-.581-.574V4.903c0-1.815 1.494-3.294 3.329-3.294 1.834 0 3.327 1.479 3.327 3.294v1.126c0 .318-.26.574-.581.574zM12.967 16.89c.163 0 .321-.05.442-.14l2.752-2.064a.528.528 0 0 0 .224-.42l-.016-7.098c0-.31-.3-.563-.666-.563H2.298c-.369 0-.667.252-.667.563l-.016 7.098c0 .16.082.313.224.42L4.59 16.75a.74.74 0 0 0 .443.142h7.934z"/>
        </svg>
        {greaterThanZero && <span className='roa-item-count'>{count}</span>}

      </Default>
      <Laptop>
        <svg width="21" height="20" viewBox="0 0 21 20">
          <path d="M13.76 7.304H7.217c-.381 0-.692-.288-.692-.646V5.39c0-2.042 1.78-3.706 3.966-3.706 2.184 0 3.963 1.664 3.963 3.706v1.267c0 .358-.31.646-.692.646zM15.214 18.877a.91.91 0 0 0 .526-.159l3.278-2.32a.585.585 0 0 0 .267-.474l-.019-7.985c0-.35-.356-.633-.793-.633H2.506c-.44 0-.795.284-.795.633l-.019 7.985c0 .181.097.353.267.473l3.277 2.321a.918.918 0 0 0 .528.159h9.45z"/>
        </svg>
        {greaterThanZero && <span className='roa-item-count'>{count}</span>}
      </Laptop>
    </div>
  )
}

const BagIcon = styled(BaseBagIcon)`
position: relative;
display: inline-block;
  svg {
    width: ${props => props.width.mobile};
    > polygon, path {
      fill: none;
      stroke: ${props => props.theme.colors.rocketBlue};
      stroke-linecap:round;
      stroke-linejoin:round;
      stroke-width: 1.5;
    }
  }
  .roa-item-count {
    display: flex;
    position: absolute;

    top: -6px;
    right: -7px;

    width: 15px;
    height: 15px;

    border-radius: 50%;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.colors.rocketBlue};

    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    color: ${props => props.theme.colors.white};
  }
  > g circle {
    fill: ${props => props.theme.colors.rocketBlue};
  }
  > g text {
    fill: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: .8rem;
    font-weight: 500;
  }

  .screenReader{
    font-size: 0;
  }
  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    svg {
      width: ${props => props.width.desktop};
      > g text {
        font-size: .7rem;
      }
    }
  `}
`

BagIcon.propTypes = {
  count: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    }),
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  width: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string
  })
}

BagIcon.defaultProps = {
  width: {
    desktop: '2.1rem',
    mobile: '1.8rem'
  }
}

/** @component */
export default BagIcon
export { BaseBagIcon }
