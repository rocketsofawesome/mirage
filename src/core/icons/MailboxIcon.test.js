import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { MailboxIcon } from 'SRC'
import { animated, UnstyledMailbox } from './MailboxIcon'

const { shallowWithTheme } = global

describe('(Styled Component) MailboxIcon', () => {
  const createMailboxIcon = (props) => {
    return shallowWithTheme(<MailboxIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMailboxIcon())
    .toMatchSnapshot()
  })

  test('animating the icon', () => {
    expect(createMailboxIcon({animated: true}))
    .toHaveStyleRule({
      modifier: css`${animated}`
    })
  })
})

describe('(Component) UnstyledMailbox', () => {
  const createUnstyledMailbox = (props) => {
    return shallowWithTheme(<UnstyledMailbox {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createUnstyledMailbox())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createUnstyledMailbox({className: className}).prop('className')
    ).toEqual(className)
  })
})
