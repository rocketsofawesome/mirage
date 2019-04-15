import React from 'react'
import 'jest-styled-components'

import { Accordion, Button, Chevron } from 'SRC'
import { BaseAccordion } from './accordion'

const { mountWithTheme } = global

const children = <div className='child'>Example</div>

const defaultProps = {
  children: children,
  toggleElement: <Button>Toggle</Button>,
  ignoreErrors: true
}

describe('(Styled Component) Accordion', () => {
  const createAccordion = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<Accordion {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createAccordion())
    .toMatchSnapshot()
  })
})

describe('(Base Component) BaseAccordion', () => {
  const createBaseAccordion = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<BaseAccordion {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseAccordion())
    .toMatchSnapshot()
  })

  test('opening the accordion', () => {
    const component = createBaseAccordion()
    expect(component.find('.child').length).toEqual(0)
    component.setState({open: true})
    expect(component.find('.child').length).toEqual(1)
  })
})
