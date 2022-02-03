import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import  { DesktopNavigation, HeaderLink } from 'SRC'
import { BaseDesktopNavigation } from './desktopNavigation'

const { shallowWithTheme, mountWithTheme } = global

describe('(Styled Component)  DesktopNavigation', () => {
  const createDesktopNavigation  = (props) => {
    return mountWithTheme(<DesktopNavigation {...props} highlightable={false} />)
  }

  test('matching the snapshot', () => {
    expect(createDesktopNavigation())
    .toMatchSnapshot()
  })
})

describe('(Base Component) BaseDesktopNavigation', () => {
  const createBaseDesktopNavigation = (props) => {
    return shallowWithTheme(<BaseDesktopNavigation {...props} />)
  }
  describe('when not a subscriber', () => {
    test('subscription links are not rendered', () => {
      const component = createBaseDesktopNavigation()
      expect(component.find({children: 'Subscribe + Save'}).length).toBeTruthy()
      expect(component.find({children: 'My Subscription'}).length).toBeFalsy()
    })
    test('opening girls mega menu', () => {
      const component = createBaseDesktopNavigation()
      component.find({children: 'Girls'}).simulate('click')
      expect(component.state().girls.visible).toBeTruthy()
    })

    test('opening boys mega menu', () => {
      const component = createBaseDesktopNavigation()
      component.find({children: 'Boys'}).simulate('click')
      expect(component.state().boys.visible).toBeTruthy()
    })

    test('closing the mega menu', () => {
      const component = createBaseDesktopNavigation()
      component.find({children: 'Boys'}).simulate('click')
      expect(component.state().boys.visible).toBeTruthy()
      component.find({children: 'Subscribe + Save'}).simulate('mouseenter')
      expect(component.state().boys.visible).toBeFalsy()
    })
  })

  describe('when user is a subscriber', () => {
    test('subscription links are rendered', () => {
      const component = createBaseDesktopNavigation({showSubscriptionLinks: true})
      expect(component.find({children: 'Subscribe + Save'}).length).toBeFalsy()
      expect(component.find({children: 'My Subscription'}).length).toBeTruthy()
    })
  })

})
