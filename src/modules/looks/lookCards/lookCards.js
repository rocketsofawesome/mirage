import React from 'react'
import PropTypes from 'prop-types'

import { Card, CardInformation, InlineImage, FlexCol, FlexRow } from 'SRC'

const LookCards = ({className, looks}) => {
  return (
    <FlexRow constrained>
      {
        looks.map((look, index) => {
          return (
            <FlexCol desktop={{width: 4}} key={index}>
              <Card constrained={false}>
                <InlineImage {...look.image} />
                <CardInformation {...look.information} />
              </Card>
            </FlexCol>
          )
        })
      }
    </FlexRow>
  )
}

LookCards.propTypes = {
  
}
/** @component */
export default LookCards