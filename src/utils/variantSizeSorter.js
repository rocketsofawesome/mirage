import React, { Component } from 'react'

export default function withSortedSizes(WrappedComponent) {
  return class extends Component {
    sortVariantsBySize = () => {
      const { variants: inVariants } = this.props
      const variantFilter = (variant, index, self) =>
        index === self.findIndex((v) => (
          v.id === variant.id
        ))
      const sizeMap = {
        'XXS': 20,
        'XS': 21,
        'S': 22,
        'M': 23,
        'L': 24,
        'XL': 25,
        'XXL': 26,
        'XS/S': 30,
        'M/L': 31
      }
      const variantSort = (currentVariant, nextVariant) => {
        const currentVariantWeight = sizeMap[currentVariant.size.toUpperCase()] || parseInt(currentVariant.size)
        const nextVariantWeight = sizeMap[nextVariant.size.toUpperCase()] || parseInt(nextVariant.size)
        return (currentVariantWeight > nextVariantWeight) ? 1 : -1
      }
      return inVariants
      .filter(variantFilter)
      .sort(variantSort)
    }
    render () {
      const sortedVariants = this.sortVariantsBySize()
      return <WrappedComponent {...this.props} variants={sortedVariants} />
    }
  }
}
