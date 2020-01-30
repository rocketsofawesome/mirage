import React from 'react'
import PropTypes from 'prop-types'

import { MirageMarkdown, Link, ContentfulRenderer } from 'SRC'

const BaseContentfulSplitTout = ({
  className,
  fields: {
    description,
    imageLinks
  },
  renderLink,
  ...props
}) => {
  const links = { imageLinks: [], textLinks: [] }
  imageLinks.map((imageLink, index) => {
    links.imageLinks[index] =
    <ContentfulRenderer
    key={index}
    {...{
      className: 'roa-split-tout-image-link',
      ...imageLink
      }} />
    links.textLinks[index] = renderLink({
      index: index,
      target: imageLink.fields.destination,
      children: imageLink.fields.linkText,
      className: 'roa-split-tout-link'
    })
    return null
  })
  return (
    <div className={className}>
      {links.imageLinks}
      <MirageMarkdown>{description}</MirageMarkdown>
      {links.textLinks}
    </div>
  )
}

BaseContentfulSplitTout.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    description: PropTypes.string,
    imageLinks: PropTypes.array
  })
}

BaseContentfulSplitTout.defaultProps = {
  renderLink: ({children, index, target, ...props}) => {
    return (
      <div{...props} key={index}>
        <Link href={target} underline={false}>
          {children}
        </Link>
      </div>
    )
  }
}

export default BaseContentfulSplitTout
