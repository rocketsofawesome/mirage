import React from 'react'
import 'jest-styled-components'
import { LooksListing } from 'SRC'
const { mountWithTheme } = global


describe('(Template) LooksListing', () => {
  const createLooksListing = (props) => {
    return mountWithTheme(<LooksListing {...props} />)
  }
  test('matching the snapshot', () => {
    expect(createLooksListing())
    .toMatchSnapshot()
  })
  test('renders our header if headerContent prop is passed', () => {
    expect(createLooksListing())
    
  })
})