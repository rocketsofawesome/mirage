import React from 'react'

const SIZE_MAP = {
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

function getSize({ size }) {
  return SIZE_MAP[size.toUpperCase()] || parseInt(size, 10);
}

export function sortVariantsBySize(variants) {
  return variants.sort(
    (a, b) => getSize(a) - getSize(b)
  );
}

export function withSortedSizes(WrappedComponent) {
  return class extends React.Component {
    render () {
      const { variants } = this.props
      const sortedVariants = sortVariantsBySize(variants)
      return <WrappedComponent {...this.props} variants={sortedVariants} />
    }
  }
}
