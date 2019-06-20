import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseSolo = ({className, ...props}) => {
  return (
    <FlexRow
      constrained
      className={className}>
      <FlexCol
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

const Solo = styled(BaseSolo)`
  margin-bottom: 2rem;
`

Solo.propTypes = {
  className: PropTypes.string
}

export default Solo
