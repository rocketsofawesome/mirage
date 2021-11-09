import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { swatchUrl, ColorSwatchInput, Label } from 'SRC'

const Container = styled.div`
  margin-bottom: 30px;
`

const ColorName = styled.span`
  text-transform: none;
  font-weight: 200;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  margin-left: 10px;
`

const Swatches = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`

const getSwatchURL = (colorway) => swatchUrl(colorway, {
  crop: 'scale',
  quality: 100,
  width: 40
})

const PDPColorwayPicker = ({ colorways, selected, changeColor }) => (
  <Container>
    <Label fontWeight={700}>
      Color
      <ColorName>{selected.color}</ColorName>
    </Label>
    <Swatches>
      {colorways.map((colorway, i) => (
        <ColorSwatchInput
          key={`${i}-${colorway.slug}`}
          onClick={changeColor}
          value={colorway.slug}
          swatchUrl={getSwatchURL(colorway)}
          colorName={colorway.color}
          selected={selected.slug}
        />
      ))}
    </Swatches>
  </Container>
)

PDPColorwayPicker.propTypes = {
  colorways: PropTypes.array,
  selected: PropTypes.object,
  changeColor: PropTypes.func
}

/** @component */
export default PDPColorwayPicker
