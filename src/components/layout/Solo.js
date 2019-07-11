import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

const BaseSolo = ({
  className,
  constrained,
  padding,
  ...props
}) => {
  return (
    <FlexRow
      constrained={constrained}
      className={className}
      padding={padding}>
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
  className: PropTypes.string,
  constrained: PropTypes.bool,
  padding: PropTypes.bool
}

Solo.defaultProps = {
  constrained: false,
  padding: false
}

export default Solo
