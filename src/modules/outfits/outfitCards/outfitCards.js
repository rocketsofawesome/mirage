import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, InlineImage, FlexCol, FlexRow } from 'SRC'

const OutfitCards = styled(({className, element, outfits}) => {
  return (
    <FlexRow constrained>
      {
        outfits.map((outfit, index) => {
          return (
            <FlexCol className={className} desktop={{width: 4}} key={index}>
              <Card {...outfit.card}>
                <InlineImage {...outfit.image} />
                {outfit.information}
              </Card>
            </FlexCol>
          )
        })
      }
    </FlexRow>
  )
})`
  ${Card} {
    margin-bottom: 6rem;
  }
`

OutfitCards.propTypes = {
  element: PropTypes.node,
  outfit: PropTypes.array
}

OutfitCards.defaultProps = {
  element: 'a'
}

/** @component */
export default OutfitCards
