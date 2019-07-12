import React from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from 'SRC'

const FullBleed = ({className, ...props}) => {
  return (
    <FlexRow
      className={className}
      padding={false}>
      <FlexCol
        nested
        mobile={{
          width: 4
        }}
        desktop={{
          width: 12
        }}
        {...props}/>
    </FlexRow>
  )
}

FullBleed.propTypes = {

}

export default FullBleed
