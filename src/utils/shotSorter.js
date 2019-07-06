import React, { Component } from 'react'

export const shotTypeSortOrder = [
  'front',
  'on_model',
  'back',
  'detail',
  'other'
]

export default function withSortedShots(WrappedComponent) {
  return class extends Component {
    sortShots = () => {
      const { shots: inShots } = this.props
      return inShots.sort((shot1, shot2) => {
        return shotTypeSortOrder.indexOf(shot1.shot_type) < shotTypeSortOrder.indexOf(shot2.shot_type) ? -1 : 1
      })
    }

    render () {
      const { product } = this.props
      const sortedShots = this.sortShots()
      const shots = sortedShots.map((shot) => {
        return ({
            alt: `${product.name} ${shot.shot_type}`,
            src: shot.cloudinary_key
          })
      })
      return <WrappedComponent {...this.props} images={shots} />
    }
  }
}
