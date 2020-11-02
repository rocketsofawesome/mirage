import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { InlineImage } from 'SRC'

class BaseInstagram extends React.Component {
  render () {
    const { className } = this.props
    return (
      <div className={className}>
        <div className='gifContainer'>
          <InlineImage aria-hidden className='gif' alt='Fun and animated illustration of phone and Instagram photo' src='https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1563995547/web/PHONE_STATIC.png' />
        </div>
        <div className="gallery-container">
          <div
            className="yotpo yotpo-pictures-widget"
            data-gallery-id="5fa029c167e297000789c89b">
          </div>
        </div>
      </div>
    )
  }
}

const Instagram = styled(BaseInstagram)`
  width: 100%;
  padding: 0 7%;
  ${props => props.theme.breakpointsVerbose.belowTablet`
    display: block !important;
    padding: 0 2rem;
  `}
  .gifContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > a {
      width: 50%;
      max-width: 28rem;
      padding: 1rem;
      box-sizing: border-box;
      img {
        width: 100%;
        max-width: 26rem;
      }
    }
    .gif {
      height: 260px;
      z-index: 0;
      padding-left: 5px;
      ${props => props.theme.breakpointsVerbose.belowTabletMax`
        width: 14rem;
        height: auto;
        left: 0;
        position: absolute;
      `}
      ${props => props.theme.breakpointsVerbose.belowTablet`
        position: relative;
        padding-left: 0;
      `}
    }

    ${props => props.theme.breakpointsVerbose.belowTabletMax`
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: relative;
    `}

    ${props => props.theme.breakpointsVerbose.belowTablet`
      display: block;
      text-align: center;
      margin-bottom: 20px;
    `}
  }
  .gallery-container {
    ${props => props.theme.breakpointsVerbose.aboveIncludingLaptop`
      padding-left: 5px;
    `}
    ${props => props.theme.breakpointsVerbose.belowLaptop`
      margin-left: 14rem;
    `}
    ${props => props.theme.breakpointsVerbose.belowTablet`
      margin-left: 0;
    `}
  }
`

Instagram.propTypes = {
  theme: PropTypes.object
}

/** @component */
export default withTheme(Instagram)
