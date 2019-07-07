import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { H4, QuickAddSize } from 'SRC'
import { default as withSortedSizes } from 'SRC/utils/variantSizeSorter'


export class BaseQuickAddSizes extends Component {
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
      quickAdd
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
              onClick: quickAdd(variant)
            }
            return (
              <li key={index}>
                <QuickAddSize
                  input={input}>
                  {variant.size[0]}
                </QuickAddSize>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

BaseQuickAddSizes.propTypes = {
  addingText: PropTypes.string,
  className: PropTypes.string,
  defaultText: PropTypes.string,
  variants: PropTypes.array,
  loading: PropTypes.bool,
  onClick: PropTypes.func
}

BaseQuickAddSizes.defaultProps = {
  addingText: 'Adding...',
  defaultText: 'Choose your size'
}

export default withSortedSizes(BaseQuickAddSizes)
