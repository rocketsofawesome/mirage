import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { H4, QuickAddSize } from 'SRC'

export default class QuickAddSizes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      adding: false,
      selected: undefined
    }
  }

  handleSizeChange = (selectedVariant) => {
    this.setState({selected: selectedVariant})
  }

  render () {
    const {
      className,
      defaultText,
      variants,
      loading,
      onClick
    } = this.props
    return (
      <div className={className}>
        <H4
          italic={false}
          fontSize={'1.4rem'}
          uppercase>
          {defaultText}
        </H4>
        <ul>
          {variants.map((variant, index) => {
            const input = {
              name: variant.sku,
              disabled: loading || !variant.in_stock,
              onClick: onClick(variant.sku)
            }
            return (
              <li key={variant.sku}>
                <QuickAddSize
                  input={input}>
                  {variant.size}
                </QuickAddSize>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

QuickAddSizes.propTypes = {
  addingText: PropTypes.string,
  className: PropTypes.string,
  defaultText: PropTypes.string,
  variants: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func
}

QuickAddSizes.defaultProps = {
  addingText: 'Adding...',
  defaultText: 'Choose your size'
}
