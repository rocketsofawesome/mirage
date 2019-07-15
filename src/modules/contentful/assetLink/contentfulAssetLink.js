import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'SRC'

import { ContentfulRenderer } from 'SRC'

const ContentfulAssetLink = styled(({
  className,
  fields: {
    destination,
    asset
  },
  renderLink
}) => {
  return renderLink({
    className: className,
    children: <ContentfulRenderer {...asset} />,
    target: destination,
  })
})`

`

ContentfulAssetLink.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    destination: PropTypes.string,
    asset: PropTypes.object.isRequired
  }),
  renderLink: PropTypes.func.isRequired
}

ContentfulAssetLink.defaultProps = {
  renderLink: ({children, target, ...props}) => {
    return (
      <Link
        href={`${target}`}
        underline={false}
        {...props}>
        {children}
    </Link>
    )
  }
}

/** @component */
export default ContentfulAssetLink
