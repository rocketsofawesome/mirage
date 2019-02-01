import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import {
  InlineImage,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  Link,
  P
} from 'SRC'

const headerRenderer = ({level, children, ...props}) => {
  const headers = [H1, H2, H3, H4, H5, H6]
  console.log(level, headers[level-1])
    return React.createElement(headers[level-1], props, children)
}

const Markdown = styled(({className, children, ...props}) => {
  return(
    <ReactMarkdown source={children} renderers={{
      link: Link,
      thematicBreak: Hr,
      paragraph: P,
      heading: headerRenderer,
      image: InlineImage
    }} />
    )
})`
`

Markdown.propTypes = {

}

/** @component */
export default Markdown
