import React from 'react'
import styled from 'styled-components'

const Rect = ({ className }) => {
  return (
    <rect className={className} x='2.5' y='2.5' width='185' height='185' rx='10' ry='10' />
  )
}

const StyledRect = styled(Rect)`
  fill: none;
  stroke-width: 20;
  stroke-linecap: round;
`

export default StyledRect
export { Rect }
