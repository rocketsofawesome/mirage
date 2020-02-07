import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { NextLinkCard, InlineImage, FlexCol, FlexRow } from 'SRC'

const OutfitCards = styled(({ className, element, outfits }) => {
  return (
    <FlexRow constrained>
      {
        outfits.map((outfit, index) => {
          return (
            <FlexCol className={className}
              mobile={{ width: 2 }}
              tablet={{ width: 6 }}
              desktop={{ width: 4 }}
              key={index}>
              <NextLinkCard {...outfit.card}>
                <div>
                  <InlineImage {...outfit.image} />
                  {outfit.information}
                </div>
              </NextLinkCard>
            </FlexCol>
          )
        })
      }
    </FlexRow>
  )
})`
  ${NextLinkCard} {
    margin-bottom: 2rem;
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      margin-bottom: 4rem;
    `}
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
