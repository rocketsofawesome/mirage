import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseQuartet = ({
  children,
  className,
  constrained,
  padding
}) => {
  return (
    <FlexRow
      className={className}
      constrained={constrained}
      padding={padding}>
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
  children: PropTypes.array,
  constrained: PropTypes.bool,
  padding: PropTypes.bool
}

Quartet.defaultProps = {
  constrained: false,
  padding: false
}

export default Quartet
