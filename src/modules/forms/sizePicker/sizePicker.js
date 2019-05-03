import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SquareRadioButton } from 'SRC'

const SizePicker = styled(({className, variants, currentSize, onSizeSelect, productId }) => {
  return (
    <div className={className}>
      {variants.map((variant, index)=> {
        return (
          <SquareRadioButton
            key={`${productId}-${index}`}
            input={
              {
                onClick: onSizeSelect,
                value: variant.sku,
                checked: (currentSize === variant.sku)
              }
            }
            disabled={!variant.in_stock}
            selected={(currentSize === variant.sku)}
            children={variant.size} />
          )
      })}
    </div>
  )
})`
  ${SquareRadioButton} {
    margin-top: 1.5rem;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
  }

`
SizePicker.propTypes = {
  className: PropTypes.string,
  sizes: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  currentSize: PropTypes.number
}

/** @component */
export default SizePicker