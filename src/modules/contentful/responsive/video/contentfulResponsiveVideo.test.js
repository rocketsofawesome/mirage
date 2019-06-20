import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ContentfulResponsiveVideo, BackgroundVideo } from 'SRC'

import { default as defaultProps } from './defaultProps'

const { mountWithTheme } = global

describe('(Styled Component) ContentfulResponsiveVideo', () => {
  const createContentfulResponsiveVideo = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulResponsiveVideo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulResponsiveVideo())
    .toMatchSnapshot()
  })

  test('renders the sources', () => {
    expect(
      createContentfulResponsiveVideo()
      .find(BackgroundVideo).prop('sources').desktop
    ).toContain(defaultProps.fields.sources[0].fields.file.url)
    expect(
      createContentfulResponsiveVideo()
      .find(BackgroundVideo).prop('sources').mobile
    ).toContain(defaultProps.fields.mobileSources[0].fields.file.url)
  })

  test('renders children', () => {
    const child = <h1>Example</h1>
    expect(
      createContentfulResponsiveVideo({
        ...defaultProps,
        children: child
      }).find('h1').length).toEqual(1)
  })
})
