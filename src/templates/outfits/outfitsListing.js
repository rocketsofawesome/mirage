import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexCol, FlexRow, OutfitCards } from 'SRC'

const OutfitsListing = styled(({className, element, headerContent, outfits}) => {
  return (
    <div className={className}>
      {headerContent &&
        <FlexRow constrained>
          <FlexCol className='roa-outfits-header' element='header'>
            {headerContent}
          </FlexCol>
        </FlexRow>
      }
      <OutfitCards element={element} outfits={outfits} />
    </div>
  )
})`
  .roa-outfits-header {
    margin: 2rem 0;
    > * {
      flex-basis: 100%;
      text-align: center;
      margin: 1rem;
    }
  }
`
OutfitsListing.propTypes = {
  element: PropTypes.node,
  headerContent: PropTypes.array,
  outfits: PropTypes.array
}

OutfitsListing.defaultProp = {
  element: 'a',
  outfits: []
}
/** @component */
export default OutfitsListing
