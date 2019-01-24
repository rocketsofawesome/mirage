import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

import { theme } from './core/theme'

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}

const shallowWithTheme = (component) => {
  const context = enzyme.shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return enzyme.shallow(component, { context })
}

const mountWithTheme = (component) => {
  const context = enzyme.shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return enzyme.mount(component, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  })
}

const renderWithTheme = (component) => {
  const context = enzyme.shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return enzyme.render(component, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  })
}

global.localStorage = localStorageMock;
global.shallowWithTheme = shallowWithTheme;
global.mountWithTheme = mountWithTheme
global.renderWithTheme = renderWithTheme

enzyme.configure({ adapter: new Adapter() });
