import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseSolo = ({className, constrained, ...props}) => {
  return (
    <FlexRow
      constrained={constrained}
      className={className}
      padding>
      <FlexCol
        mobile={{width: 4}}
        tablet={{width: 12}}
        desktop={{width: 12}}
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

Solo.defaultProps = {
  constrained: false
}

export default Solo
