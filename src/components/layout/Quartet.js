import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseQuartet = ({children, className}) => {
  return (
    <FlexRow
      className={className}
      constrained
      padding>
      {children.map((child, index) => {
        return (
          <FlexCol
            mobile={{
              width: 4
            }}
            desktop={{
              width: 3
            }}
            key={index}>
              {child}
            </FlexCol>
          )
        })}
    </FlexRow>
  )
}

const Quartet = styled(BaseQuartet)`
  ${FlexCol} {
    margin-bottom: 2rem;
  }
`

Quartet.propTypes = {
  children: PropTypes.array
}

export default Quartet
