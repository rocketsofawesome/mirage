import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, NextLinkCard, InlineImage, FlexCol, FlexRow } from 'SRC'

const OutfitCards = styled(({ className, element, outfits, nextLink }) => {
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
              {nextLink
                ?
                <NextLinkCard {...outfit.card}>
                  <div>
                    <InlineImage {...outfit.image} />
                    {outfit.information}
                  </div>
                </NextLinkCard>
                :
                <Card {...outfit.card}>
                  <InlineImage {...outfit.image} />
                  {outfit.information}
                </Card>
              }
            </FlexCol>
          )
        })
      }
    </FlexRow>
  )
})`
  ${NextLinkCard}, ${Card} {
    margin-bottom: 2rem;
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      margin-bottom: 4rem;
    `}
  }
`

OutfitCards.propTypes = {
  element: PropTypes.node,
  outfit: PropTypes.array,
  nextLink: PropTypes.bool
}

OutfitCards.defaultProps = {
  element: 'a',
  nextLink: false
}

/** @component */
export default OutfitCards
