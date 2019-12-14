import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { ColorPicker, Desktop, Default, P } from 'SRC'
import { swatchUrl } from 'SRC'

const SwatchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ColorsInterface = ({ className, colorways, productId, onChange, selected }) => {
  if (colorways && colorways.length > 1) {
    return (
      <div className={className}>
        <Default displayTarget='belowTabletMax'>
          <P fontSize="14px">{colorways.length} colors available</P>
        </Default>
        <Desktop>
          <SwatchContainer>
            <P fontSize="14px">Colors</P>
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
          </SwatchContainer>
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
