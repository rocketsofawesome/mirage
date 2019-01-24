import React from 'react'
import PropTypes from 'prop-types'

import * as Core from './core'
import * as Components from './components'
import * as Modules from './modules'


const COMPONENT_RENDER_MAP = {
  Core: {
    BackgroundImage: (item) => {
      return (
        <Core.BackgroundImage {...item.props}>
          {item.children.map(child => Renderer({item: child}))}
        </Core.BackgroundImage>
      )
    },
    Caption: (item) =>
      <Core.Caption {...item.props}>
        {item.children}
      </Core.Caption>,
    H1: (item) =>
      <Core.H1 {...item.props}>
        {item.children}
      </Core.H1>,
    H2: (item) =>
      <Core.H2 {...item.props}>
        {item.children}
      </Core.H2>,
    H3: (item) =>
      <Core.H3 {...item.props}>
        {item.children}
      </Core.H3>,
    H4: (item) =>
      <Core.H4 {...item.props}>
        {item.children}
      </Core.H4>,
    H5: (item) =>
      <Core.H5 {...item.props}>
        {item.children}
      </Core.H5>,
    H6: (item) =>
      <Core.H6 {...item.props}>
        {item.children}
      </Core.H6>,
    Label: (item) =>
      <Core.Label {...item.props}>
        {item.children}
      </Core.Label>,
    P: (item) =>
      <Core.P {...item.props}>
        {item.children}
      </Core.P>,
    Grid: (item) =>
      <Core.Grid>
        {item.children.map(child => Renderer({item: child}))}
      </Core.Grid>,
    Logo: () => <Core.Logo />,
    Sizer: (item) =>
      <Core.Sizer {...item.props}>
        {item.children.map(child => Renderer({item: child}))}
      </Core.Sizer>
  },
  Components: {
    InformationalSection: (item) =>
      <Components.InformationalSection>
        {item.children.map(child => Renderer({item: child}))}
      </Components.InformationalSection>,
    BackgroundVideo: (item) =>
      <Components.BackgroundVideo {...item.props}>
        {item.children.map(child => Renderer({item: child}))}
      </Components.BackgroundVideo>
  },
  Modules: {
    Page: (item) =>
      <Modules.Page>
        {item.children.map(child => Renderer({item: child}))}
      </Modules.Page>
  }
}

const Renderer = ({item}) => {
  try {
    return COMPONENT_RENDER_MAP[item.sys.type][item.sys.component](item.data)
  } catch(err) {
    console.warn(`It appears that you are tying to render an element that doesn't exist in the COMPONENT_RENDER_MAP`)
  }
}

Renderer.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ])
}

export default Renderer
