import React from 'react'
import 'jest-styled-components'
import { Gallery, Thumbnails, InlineImage } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {activeImage: 0, images: [
  {
    alt: 'Cool Down Active Short on model',
    src: 'production/catalog/bi5flgfpxbyr9tp2xkd9'
  },
  {
    alt: 'Cool Down Active Short on model',
    src: 'production/catalog/hhdgxghcpc17xho1pngc'
  },
  {
    alt: 'Fuzzy Tiger Tee on model',
    src: 'production/catalog/q5l42uiqm8orjia4j14m'
  },
  {
    alt: 'Fuzzy Tiger Tee front',
    src: 'production/catalog/rfxx1bcmwy7zych1pmof'
  },
  {
    alt: 'Fuzzy Tiger Tee detail',
    src: 'production/catalog/jhpde0cdhl11lu9fa41o'
  },
  {
    alt: 'Cool Down Active Short front',
    src: 'production/catalog/xrpiecxqwmiso3acxucc'
  },
  {
    alt: 'Cool Down Active Short back',
    src: 'production/catalog/wmwxd0bxeavdtgt0uqzx'
  }
]}

describe('() Gallery', () => {
  const createGallery = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<Gallery {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGallery())
    .toMatchSnapshot()
  })

  test('thumbnailClick should update the state', () => {
    const createGallComponent = createGallery()
    createGallComponent.find(Thumbnails).find(InlineImage).last().simulate('click')

    expect(createGallComponent.find('BaseGallery').state('activeImage').src).toEqual(defaultProps.images[defaultProps.images.length - 1].src)
  })

  test('setting activeImage will set the proper image', () => {
    const activeImageIndex = 2
    const createGallComponent = createGallery({activeImage: activeImageIndex})

    expect(createGallComponent.find('BaseGallery').state('activeImage').src).toEqual(defaultProps.images[activeImageIndex].src)
  })
})
