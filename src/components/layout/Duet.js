import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseDuet = ({
  children,
  className,
  constrained
}) => {
  return (
    <FlexRow
      constrained
      padding
      className={className}>
      {children.map((child, index) => {
        return (
          <FlexCol
            key={index}
            mobile={{width: 4}}
            tablet={{width: 12}}
            desktop={{width: 6}}>
              {child}
            </FlexCol>
          )
        })}
    </FlexRow>
  )
}

const Duet = styled(BaseDuet)`
  ${FlexCol} {
    margin-bottom: 2rem;
  }
`

Duet.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  constrained: PropTypes.bool
}

Duet.defaultProps = {
  constrained: false
}

export default Duet
