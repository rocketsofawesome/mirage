import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseTrio = ({
  children,
  className,
  constrained
}) => {
  return (
    <FlexRow
      className={className}
      constrained={constrained}
      padding>
      {children.map((child, index) => {
        return (
          <FlexCol
            key={index}
            mobile={{
              width: 4
            }}
            desktop={{
              width: 4
            }}>
              {child}
            </FlexCol>
          )
        })}
    </FlexRow>
  )
}

const Trio = styled(BaseTrio)`
  ${FlexCol} {
    margin-bottom: 2rem;
  }
`

Trio.propTypes = {
  children: PropTypes.array,
  constrained: PropTypes.bool
}

Trio.default = {
  constrained: false
}
export default Trio
