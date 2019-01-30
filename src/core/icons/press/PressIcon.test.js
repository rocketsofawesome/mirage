import React from 'react'
import 'jest-styled-components'

import { PressIcon } from 'SRC'
import { PressIconBase } from './PressIcon'

import Default from './Default.base'
import FastCompany from './FastCompany.base'
import LATimes from './LATimes.base'
import NewYorkTimes from './NewYorkTimes.base'
import NewYorkPost from './NewYorkPost.base'
import ParentsMagazine from './ParentsMagazine.base'
import PeopleMagazine from './PeopleMagazine.base'
import TechCrunch from './TechCrunch.base'
import TodayShow from './TodayShow.base'

const { mountWithTheme } = global

describe('(Styled Component) PressIcon', () => {
  const createPressIcon = (props) => {
    let brand = ''
    if (props && props.brand) {
      brand = props.brand
    }
    return mountWithTheme(<PressIcon {...props} brand={brand} />)
  }

  test('matching the snapshot', () => {
    expect(createPressIcon())
    .toMatchSnapshot()
  })
})

describe('(Component) CardIconBase', () => {
  const createPressIconBase = (props) => {
    let brand = ''
    if (props && props.brand) {
      brand = props.brand
    }
    return mountWithTheme(<PressIconBase {...props} brand={brand} />)
  }

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createPressIconBase({className: className}).prop('className')
    ).toEqual(className)
  })

  test('setting the brand to fast_company', () => {
    expect(createPressIconBase({brand: 'fast_company'}).find(FastCompany).length)
    .toEqual(1)
  })

  test('setting the brand to la_times', () => {
    expect(createPressIconBase({brand: 'la_times'}).find(LATimes).length)
    .toEqual(1)
  })

  test('setting the brand to new_york_times', () => {
    expect(createPressIconBase({brand: 'new_york_times'}).find(NewYorkTimes).length)
    .toEqual(1)
  })

  test('setting the brand to new_york_post', () => {
    expect(createPressIconBase({brand: 'new_york_post'}).find(NewYorkPost).length)
    .toEqual(1)
  })

  test('setting the brand to parents_magazine', () => {
    expect(createPressIconBase({brand: 'parents_magazine'}).find(ParentsMagazine).length)
    .toEqual(1)
  })

  test('setting the brand to people_magazine', () => {
    expect(createPressIconBase({brand: 'people_magazine'}).find(PeopleMagazine).length)
    .toEqual(1)
  })

  test('setting the brand to tech_crunch', () => {
    expect(createPressIconBase({brand: 'tech_crunch'}).find(TechCrunch).length)
    .toEqual(1)
  })

  test('setting the brand to today_show', () => {
    expect(createPressIconBase({brand: 'today_show'}).find(TodayShow).length)
    .toEqual(1)
  })

  test('not setting the brand', () => {
    expect(createPressIconBase({brand: ''}).find(Default).length)
    .toEqual(1)
  })
})
