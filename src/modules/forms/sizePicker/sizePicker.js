import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SquareRadioButton } from 'SRC'

const SizePicker = styled(({className, inputDisabled, variants, currentSize, onSizeSelect, productId }) => {
  return (
    <div className={className}>
      {variants.map((variant, index)=> {
        return (
          <SquareRadioButton
            key={`${productId}-${index}`}
            input={
              {
                onChange: onSizeSelect,
                value: variant.sku,
                checked: (currentSize === variant.sku),
                disabled: inputDisabled && !variant.in_stock
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
  sizes: PropTypes.array,
  name: PropTypes.string,
  currentSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

/** @component */
export default SizePicker
