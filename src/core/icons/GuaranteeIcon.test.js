import React from 'react'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { GuaranteeIcon } from 'SRC'
import { animation, UnstyledGuaranteeIcon } from './GuaranteeIcon'

const { shallowWithTheme } = global

describe('(Styled Component) GuaranteeIcon', () => {
  const createGuaranteeIcon = (props) => {
    return shallowWithTheme(<GuaranteeIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGuaranteeIcon())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '6rem'
    expect(createGuaranteeIcon({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })

  test('setting the width', () => {
    expect(createGuaranteeIcon({animated: true}))
    .toHaveStyleRule({
      modifer: css`${animation}`
    })
  })
})

describe('(Component) UnstyledGuaranteeIcon', () => {
  const createUnstyledGuaranteeIcon = (props) => {
    return shallowWithTheme(<UnstyledGuaranteeIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createUnstyledGuaranteeIcon())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createUnstyledGuaranteeIcon({className: className}).prop('className')
    ).toEqual(className)
  })
})
