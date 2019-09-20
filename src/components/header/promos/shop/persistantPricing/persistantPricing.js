import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { P } from 'SRC'

const PersistantPricing = styled(({ className, children }) => {
  return (
    <div className={className}>
      <div>{children}</div>
    </div>
  )
})`

width: 100%;
height: ${props => (props.height)}rem;
position: relative;
overflow: hidden;
box-sizing: border-box;

& * {
  box-sizing: border-box;
}

div {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    flex: 1 1 100%;
    text-align: center;
  }

  span {
    margin-left: 0.5rem;
  }

  ${P} {
    line-height: 3rem;
    height: ${props => (props.height)}rem;
    font-weight: 300;
    font-size: 1.1rem;
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      font-size: 1.6rem;
    `}
  }
}
`

PersistantPricing.propTypes = {
  height: PropTypes.number,
  children: PropTypes.array
}

PersistantPricing.defaultProps = {
  children: [
    <P key='message1'>Get 20% off when you buy 4+ items. Every day.
      <span role='img' aria-label='smiling face with smiling eyes'>😊</span>
      <span role='img' aria-label='confetti'>🎉</span>
    </P>
  ],
  height: 3
}

/** @component */
export default PersistantPricing
