import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { pStyle } from 'SRC/core/typography/P'
import { FlexCol, FlexRow } from 'SRC'

const animateRainbow = keyframes`
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
`

const message = css`
  background-color: ${props => props.theme.colors.rocketBlue};
  color: ${props => props.theme.colors.white};
`

const notification = css`
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.textPrimary};
`

const error = css`
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  font-style: italic;
`

const promo_blue = css`
background-color: ${props => props.theme.colors.lightBlue[0]};
color: ${props => props.theme.colors.rocketBlue};
font-style: italic;
`

const promo_pink = css`
background-color: ${props => props.theme.colors.pink};
color: ${props => props.theme.colors.textPrimary};
font-style: italic;
`

const promo_rainbow = css`
  background: linear-gradient(270deg, #f37a7f, #ffb36f, #fff366, #c6e472,
#a1dddb, #c787a9, #f37a7f, #ffb36f, #fff366, #c6e472,
#a1dddb, #c787a9);
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    background-size: 200% 200%;
  `}
  background-size: 400% 400%;
  animation:  ${animateRainbow} 30s ease-in-out infinite;
`

const setTypeStyle = ({type}) => {
  const types = {
    'error': error,
    'message': message,
    'notification': notification,
    'promo_blue': promo_blue,
    'promo_pink': promo_pink,
    'promo_rainbow': promo_rainbow
  }

  return types[type]
}

const Status = styled(({className, children, dismissable}) => {
  return (
    <div className={className}>
      <FlexRow>
          <FlexCol
            className='container'
            mobile={{width: 4}}
            desktop={{width: 10, span: 1}}
          >
            {children}
          </FlexCol>
      </FlexRow>
    </div>
  )
})`
  .container {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${pStyle}
    font-size: 1.1rem;
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      font-size: ${props => props.fontSize};
    `}
  }
  ${props => setTypeStyle(props)}
`

Status.propTypes = {
  type: PropTypes.oneOf([
    'error', 'message', 'notification',
    'promo_blue', 'promo_pink', 'promo_rainbow'
  ]),
  dismissable: PropTypes.bool
}

Status.defaultProps = {
  type: 'notification',
  fontSize: '1.6rem'
}

/** @component */
export default Status
