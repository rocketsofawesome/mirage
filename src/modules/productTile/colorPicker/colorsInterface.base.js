import React from 'react'
import PropTypes from 'prop-types'

import cloudinary from 'SRC/services/cloudinary'
import { ColorPicker, Desktop, Default, P } from 'SRC'

const ColorsInterface = ({ className, colorways, productId, onChange, selected }) => {
  if (colorways && colorways.length > 1) {
    return (
      <div className={className}>
        <Default targetDisplay='belowDesktop'>
          <P>{colorways.length} colors available</P>
        </Default>
        <Desktop display='flex' >
          <P>Colors</P>
          {colorways.map((colorway) => {
            const src = cloudinary.url(colorway.shots[0].cloudinary_key,{
              transformation: 'swatch',
              crop: 'scale',
              quality: 100,
              width: 40,
              format: 'jpg'
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
