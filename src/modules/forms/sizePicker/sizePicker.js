import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SquareRadioButton } from 'SRC'

const SizePicker = styled(({className, sizes, name, currentSize }) => {
  return (
    <div className={className}>
      {sizes.map((size, index)=> {
        return (
          <SquareRadioButton
            key={`${name}-${index}`}
            input={{
              name: name,
              value: size.value
            }}
            inStock={size.inStock}
            selected={(currentSize === size.value)}
            children={size.value} />
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
