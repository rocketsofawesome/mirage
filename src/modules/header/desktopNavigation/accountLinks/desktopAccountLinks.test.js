import React from 'react'
import 'jest-styled-components'

import { DesktopAccountLinks, Link, HeaderLink, SubMenu } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) DesktopAccountLinks', () => {
  const createDesktopAccountLinks = (props) => {
    return mountWithTheme(<DesktopAccountLinks {...props} />)
  }
  describe('when logged out', () => {
    const loggedOutProps = {
      showSubscriptionLinks: false,
      loggedIn: false,
      name: undefined,
      renderLink: jest.fn(({children, ...props}) => <a {...props}>{children}</a>),
      subMenuOpen: false,
      highlightable: false
    }

    test('matching the snapshot', () => {
      expect(createDesktopAccountLinks(loggedOutProps))
      .toMatchSnapshot()
    })

    test('rendering the Login link', () => {
      expect(
        createDesktopAccountLinks(loggedOutProps)
        .contains('Login')
      ).toBeTruthy()
    })

    test('renderLink firing on render', () => {
      createDesktopAccountLinks(loggedOutProps)
      expect(loggedOutProps.renderLink).toBeCalled()
    })
  })


  describe('when logged in', () => {
    const loggedInProps = {
      showSubscriptionLinks: false,
      loggedIn: true,
      name: 'Josh',
      subMenuOpen: false
    }

    test('matching the snapshot', () => {
      expect(createDesktopAccountLinks(loggedInProps))
      .toMatchSnapshot()
    })

    test('Rendering user\'s name', () => {
      expect(
        createDesktopAccountLinks(loggedInProps)
        .contains(loggedInProps.name)
      ).toBeTruthy()
    })

    test('opening the subMenu', () => {
      const component = createDesktopAccountLinks(loggedInProps)
      expect(component.find(SubMenu).find(Link).length).toEqual(0)
      component.find(HeaderLink).simulate('click')
      expect(component.find(SubMenu).find(Link).length).toEqual(3)
    })

    test('rendering out subscription links', () => {
      const nonSubscriptionComponent = createDesktopAccountLinks({
        ...loggedInProps,
        open: true
      })
      expect(
        nonSubscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(3)

      const subscriptionComponent = createDesktopAccountLinks({
        ...loggedInProps,
        showSubscriptionLinks: true,
        open: true
      })

      expect(
        subscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(8)
    })

  })
})
