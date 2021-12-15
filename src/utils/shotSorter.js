import React, { Component } from 'react'
import { Layer } from 'cloudinary-core'

import cloudinary from 'services/cloudinary'

export const shotTypeSortOrder = [
  'front',
  'on_model',
  'back',
  'detail',
  'other'
]

export function sortShots(shots) {
  return shots.sort((shot1, shot2) =>
    shotTypeSortOrder.indexOf(shot1.shot_type) - shotTypeSortOrder.indexOf(shot2.shot_type)
  )
}

function shotUrl(shot) {
  const config = {
    transformation: 'plp_product_shot',
    format: 'jpg'
  }

  if (shot.badge) {
    const layer = new Layer({ publicId: shot.badge.public_id })
    config.overlay = layer
    config.width = 225
    config.gravity = 'north_east'
    config.x = 20
    config.y = 20
  }

  return cloudinary.url(shot.cloudinary_key, config)
}

export const withSortedShots = (WrappedComponent) => {
  return class extends Component {
    render () {
      const { product, shots } = this.props
      const sortedShots = sortShots(shots)
      const images = sortedShots.map(shot => ({
        alt: `${product.name} ${shot.shot_type}`,
        src: shotUrl(shot)
      }))
      return <WrappedComponent {...this.props} images={images} />
    }
  }
}
