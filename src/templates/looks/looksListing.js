import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexCol, FlexRow, LookCards } from 'SRC'

const LooksListing = styled(({className, element, headerContent, looks}) => {
  return (
    <div className={className}>
      {headerContent &&
        <FlexRow constrained>
          <FlexCol className='roa-looks-header' element='header'>
            {headerContent}
          </FlexCol>
        </FlexRow>
      }
      <LookCards element={element} looks={looks} />
    </div>
  )
})`
  .roa-looks-header {
    margin-bottom: 8rem;
    > * {
      flex-basis: 100%;
      text-align: center;
      margin: 1rem;
    }
  }
`
LooksListing.propTypes = {
  element: PropTypes.node,
  headerContent: PropTypes.array,
  looks: PropTypes.array
}

LooksListing.defaultProp = {
  element: 'a',
  looks: []
}
/** @component */
export default LooksListing
