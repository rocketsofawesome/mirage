import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  ContentfulRenderer,
  MirageMarkdown
} from 'SRC'

class BaseContentfulTout extends Component {
  renderContent = () => {
    const {
      fields: {
        description,
        heroButtons,
        media,
        hero
      }
    } = this.props
    return (
      <ContentfulRenderer {...media}>
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

  render () {
    const {
      className,
      renderToutLink,
      fields: {
        destination
      }
    } = this.props
  const ToutLink = renderToutLink
  if (destination) {
    return (
      <ToutLink className={className} destination={destination}>
        {this.renderContent()}
      </ToutLink>
    )
  }
    return (
      <div className={className}>
        { this.renderContent() }
      </div>
    )
  }
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

BaseContentfulTout.defaultProps = {
  renderToutLink: ({
    className,
    children,
    destination
  }) =>
    <a className={className} href={destination}>
      {children}
    </a>
}

export default BaseContentfulTout
