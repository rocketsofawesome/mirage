import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseQuartet = ({
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
            mobile={{width: 1}}
            tablet={{width: 3}}
            desktop={{width: 3}}
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

Quartet.defaultProps = {
  constrained: false
}

export default Quartet
