import React from 'react'
import PropTypes from 'prop-types'

import { ColorPicker, Desktop, Default, P } from 'SRC'
import { swatchUrl } from 'SRC'

const ColorsInterface = ({ className, colorways, productId, onChange, selected }) => {
  if (colorways && colorways.length > 1) {
    return (
      <div className={className}>
        <Default displayTarget='belowDesktop'>
          <P>{colorways.length} colors available</P>
        </Default>
        <Desktop display='flex' >
          <P>Colors</P>
          {colorways.map((colorway) => {
            const src = swatchUrl(colorway, {
              crop: 'scale',
              quality: 100,
              width: 40
            })
            const input = {
              value: colorway.code,
              onChange: onChange(colorway.code),
              checked: (selected === colorway.code)
            }
            return (
              <ColorPicker
                key={`${productId}-${colorway.code}`}
                alt={colorway.code}
                src={src}
                input={input} />
            )
          })}
        </Desktop>
      </div>
    )
  } else {
    return null
  }
}

ColorsInterface.propTypes = {
  className: PropTypes.string,
  colorways: PropTypes.array,
  productId: PropTypes.string,
  onChange: PropTypes.func
}

export default ColorsInterface
