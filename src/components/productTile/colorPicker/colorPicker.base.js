import React from 'react'
import PropTypes from 'prop-types'
import { InlineImage } from 'SRC'
const ColorPicker = ({ alt, className, input, src }) => {
  return (
    <label className={className}>
      {input.value}
      <input type='radio' {...input} />
      <InlineImage src={src} alt={alt} />
    </label>
  )
}

ColorPicker.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  src: PropTypes.string
}

export default ColorPicker
