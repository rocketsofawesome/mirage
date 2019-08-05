import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ children, url }) => {
  return (
    <main data-cms-url={url}>
      {children}
    </main>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

export default Page
