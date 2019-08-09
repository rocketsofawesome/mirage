import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Clothesline } from 'SRC'

const ClotheslineAnimation = styled(({className}) => {
  return (
    <div className={className}>
      <Clothesline key={1} />
      <Clothesline key={2} />
      <Clothesline key={3} />
    </div>
  )
})`
position: relative;
overflow: hidden;
white-space: nowrap;
  ${Clothesline} {
    width: 100%;
    ${props => props => props.theme.breakpointsVerbose.aboveTablet`
      width: 50%;
    `}
  }
`

ClotheslineAnimation.propTypes = {
  className: PropTypes.string
}

/** @component */
export default ClotheslineAnimation
