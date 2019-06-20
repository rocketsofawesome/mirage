import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import {
  ContentfulContentRow,
  ContentfulResponsiveVideo,
  ContentfulTout,
  Duet,
  FullBleed,
  Quartet,
  Solo,
  Trio,
  TrioWithLead
} from 'SRC'

import defaultProps from './defaultProps'

const { mountWithTheme } = global

describe('(Styled Component) ContentfulContentRow', () => {
  const createContentfulContentRow = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulContentRow {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulContentRow())
    .toMatchSnapshot()
  })

  test('setting the layout for the row', () => {
    const layouts = {
      Duet: Duet,
      'Full Bleed': FullBleed,
      Quartet: Quartet,
      Solo: Solo,
      Trio: Trio,
      'Trio With Lead': TrioWithLead
    }
    expect(createContentfulContentRow().find(FullBleed).length).toEqual(1)
    Object.keys(layouts).map((key) => {
      expect(
        createContentfulContentRow({
          ...defaultProps,
          fields: {
            ...defaultProps.fields,
            layout: key
          }
      })
      .find(layouts[key])
      .length
    ).toEqual(1)
    })
  })
})
