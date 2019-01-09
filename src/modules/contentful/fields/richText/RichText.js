import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as Typography from 'SRC/core/typography'

const COMPONENT_RENDER_MAP = {
  text: ({ marks, value }) => {
    if (marks.length) {
      let props = {}
      marks.forEach((mark) => {
        props[mark] = true
      })
      return <Typography.MarkedText {...props}>{value}</Typography.MarkedText>
    } else {
      return value
    }
  },
  'asset-hyperlink': () => null,
  blockquote: () => null,
  document: (item) => {
    return (<article>{item.content.map(item => RichText({item: item}))}</article>)
  },
  'embedded-asset-block': () => null,
  'embedded-entry-block': () => null,
  'embedded-entry-inline': () => null,
  'entry-hyperlink': () => null,
  'heading-1': (item) => <Typography.H1>{item.content.map(item => RichText({item: item}))}</Typography.H1>,
  'heading-2':(item) => <Typography.H2>{item.content.map(item => RichText({item: item}))}</Typography.H2>,
  'heading-3':(item) => <Typography.H3>{item.content.map(item => RichText({item: item}))}</Typography.H3>,
  'heading-4':(item) => <Typography.H4>{item.content.map(item => RichText({item: item}))}</Typography.H4>,
  'heading-5': (item) => <Typography.H5>{item.content.map(item => RichText({item: item}))}</Typography.H5>,
  'heading-6': (item) => <Typography.H6>{item.content.map(item => RichText({item: item}))}</Typography.H6>,
  hr:() => <Typography.Hr />,
  hyperlink: () => null,
  'list-item': () => null,
  'ordered-list': () => null,
  paragraph:(item) => <Typography.P>{item.content.map(item => RichText({item: item}))}</Typography.P>,
  'unordered-list': () => null
}

const RichText = ({className, item}) => {
  return COMPONENT_RENDER_MAP[item.nodeType](item)
}

RichText.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}

export default styled(RichText)``
