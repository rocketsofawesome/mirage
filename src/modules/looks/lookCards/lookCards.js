import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Card, InlineImage, FlexCol, FlexRow } from 'SRC'

const LookCards = styled(({className, element, looks}) => {
  return (
    <FlexRow constrained>
      {
        looks.map((look, index) => {
          return (
            <FlexCol className={className} desktop={{width: 4}} key={index}>
              <Card {...look.card}>
                <InlineImage {...look.image} />
                {look.information}
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

LookCards.propTypes = {
  element: PropTypes.node,
  look: PropTypes.array
}
/** @component */
export default LookCards