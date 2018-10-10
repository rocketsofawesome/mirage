import React from 'react'
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import { theme } from '../../theme'
import StyledCheck from './Check.base'

describe('(Base Component) Check', () => {
  test('should render correctly', () => {
    const tree = renderer
   .create(<StyledCheck theme={theme} />)
   .toJSON()
   expect(tree).toMatchSnapshot()
  })
})
