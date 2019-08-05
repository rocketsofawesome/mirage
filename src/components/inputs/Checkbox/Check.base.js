import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const BaseCheck  = ({ className }) => {
  return (
    <polyline className={className} points='38.75 98.75 77.75 134.75 151.25 55.25' />
  )
}

const dash = keyframes`
  from {
    stroke-dashoffset: 200;
  }
  to {
    stroke-dashoffset: 0;
  }
`

const checkedAnimation = css`
  animation: ${dash} 0.25s linear forwards;

  stroke: ${props => props.theme.colors.white};
  stroke-dasharray: 200;
  stroke-dashoffset: 0;
`

const showAnimation = css`
  ${props => props.checked && checkedAnimation}
`

const Check = styled(BaseCheck)`
  ${props => props.showAnimation && showAnimation}
  fill: none;
  stroke-width: 20;
  stroke-linecap: round;
  stroke: ${props => props.theme.colors.white};
`

Check.propTypes = {
  checked: PropTypes.bool,
  showAnimation: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

export default Check
export { BaseCheck, checkedAnimation }
