import React from 'react'
import PropTypes from 'prop-types'

const Page = ({children, url}) => {
  console.log('We are in the page')
  return (
    <main data-cms-url={url}>
      {children}
    </main>
  )
}

Page.propTypes = {

}

export default Page
