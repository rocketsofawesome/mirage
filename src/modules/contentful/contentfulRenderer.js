import React from 'react'
import PropTypes from 'prop-types'

import * as Mirage from 'SRC'
import { getAssetType, getContentType } from 'SRC/services/contentful'

const ASSET_RENDER_MAP = {
  image: (item) => <Mirage.ContentfulImage {...item} />,
  video: (item) => <Mirage.ContentfulVideo {...item} />
}

const ENTRY_RENDER_MAP = {
  assetLink: (props) => <Mirage.ContentfulAssetLink {...props} />,
  heroButton: (props) => <Mirage.ContentfulButton {...props} />,
  mediaContainer: (props) => <Mirage.ContentfulContentRow {...props} />,
  responsiveImage: (props) => <Mirage.ContentfulResponsiveImages {...props} />,
  splitTout: (props) => <Mirage.ContentfulSplitTout {...props} />,
  tout: (props) => <Mirage.ContentfulTout {...props} />,
  video: (props) => <Mirage.ContentfulResponsiveVideo {...props} />,
}

const ContentfulRenderer = (props) => {
  try {
    switch (props.sys.type) {
      case 'Asset':
        return ASSET_RENDER_MAP[getAssetType(props)](props)
      default:
        return ENTRY_RENDER_MAP[getContentType(props)](props)
    }

  } catch (err) {
    console.warn(`It appears that you are tying to render ${getContentType(props)} that doesn't exist in the RENDER_MAP`)
    return null
  }
}

ContentfulRenderer.propTypes = {
  sys: PropTypes.shape({
    type: PropTypes.string
  })
}

export default ContentfulRenderer
