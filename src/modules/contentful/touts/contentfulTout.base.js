import React from 'react'
import PropTypes from 'prop-types'

import {
  ContentfulRenderer,
  MirageMarkdown
} from 'SRC'

const BaseContentfulTout = ({
  className,
  fields: {
    description,
    media,
    heroButtons
  }
}) => {
  return (
    <ContentfulRenderer className={className} {...media}>
      <div className='roa-tout-overlay'>
        <MirageMarkdown>{description}</MirageMarkdown>
        <div className='roa-tout-buttons'>
          {heroButtons && heroButtons.map((button) => {
            return(
              <ContentfulRenderer {...button} key={button.sys.id} />
            )
          })}
        </div>
      </div>
    </ContentfulRenderer>
  )
}

BaseContentfulTout.propTypes = {
  className: PropTypes.string,
  defaultColor: PropTypes.string,
  fields: PropTypes.shape({
    backgroundColor: PropTypes.string,
    backgroundTransparency: PropTypes.number,
    description: PropTypes.string,
    media: PropTypes.object,
    position: PropTypes.string,
    textColor: PropTypes.string,
  })
}

export default BaseContentfulTout
