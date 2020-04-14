import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.selected ? props.theme.colors.rocketBlue : 'transparent'};

  label {
    margin-bottom: 0;
  }
`

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: auto;
  display: block;
  pointer-events: none;
`

const ColorSwatchInput = ({ swatchUrl, colorName, onClick, selected, value }) => (
  <Container selected={selected === value}>
    <label onClick={() => onClick(value)}>
      <Image alt={colorName} src={swatchUrl} />
    </label>
  </Container>
)

ColorSwatchInput.propTypes = {
  swatchUrl: PropTypes.string,
  colorName: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.string,
  value: PropTypes.string
}

/** @component */
export default ColorSwatchInput
