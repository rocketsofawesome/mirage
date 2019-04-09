import React from 'react'
import 'jest-styled-components'

import { AccountLinks, Link, HeaderLink, SubMenu } from 'SRC'
import { BaseAccountLinks } from './accountLinks'

const { mountWithTheme } = global

describe('(Styled Component) AccountLinks', () => {
  const createAccountLinks = (props) => {
    return mountWithTheme(<AccountLinks {...props} />)
  }
  describe('when logged out', () => {
    const loggedOutProps = {
      isSubscriptionMember: false,
      loggedIn: false,
      name: undefined,
      renderLink: jest.fn((props) => <a {...props} />),
      subMenuOpen: false,
      highlightable: false
    }

    test('matching the snapshot', () => {
      expect(createAccountLinks(loggedOutProps))
      .toMatchSnapshot()
    })

    test('rendering the Log In link', () => {
      expect(
        createAccountLinks(loggedOutProps)
        .contains('Log In')
      ).toBeTruthy()
    })

    test('renderLink firing on render', () => {
      createAccountLinks(loggedOutProps)
      expect(loggedOutProps.renderLink).toBeCalled()
    })
  })


  describe('when logged in', () => {
    const loggedInProps = {
      isSubscriptionMember: false,
      loggedIn: true,
      name: 'Josh',
      subMenuOpen: false
    }

    test('matching the snapshot', () => {
      expect(createAccountLinks(loggedInProps))
      .toMatchSnapshot()
    })

    test('Rendering user\'s name', () => {
      expect(
        createAccountLinks(loggedInProps)
        .contains(loggedInProps.name)
      ).toBeTruthy()
    })

    test('opening the subMenu', () => {
      const component = createAccountLinks(loggedInProps)
      expect(component.find(SubMenu).find(Link).length).toEqual(0)
      component.find(HeaderLink).simulate('click')
      expect(component.find(SubMenu).find(Link).length).toEqual(3)
    })

    test('rendering out subscription links', () => {
      const nonSubscriptionComponent = createAccountLinks({
        ...loggedInProps,
        open: true
      })
      expect(
        nonSubscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(3)

      const subscriptionComponent = createAccountLinks({
        ...loggedInProps,
        isSubscriptionMember: true,
        open: true
      })

      expect(
        subscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(6)
    })

  })
})
