import React from 'react'
import PropTypes from 'prop-types'
import { ContentfulRenderer } from 'SRC'
const ContentfulLandingPage = ({
  className,
  fields: {
    section
  }
}) => {
  return (
    <section>
      {section.map((element, index) => {
        return (<ContentfulRenderer key={index} {...element} />)
      })}
    </section>
  )
}

ContentfulLandingPage.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    section: PropTypes.array
  })
}

export default ContentfulLandingPage
