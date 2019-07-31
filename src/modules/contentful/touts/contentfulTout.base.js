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
        media
      },
      displayTitle,
      searchTerm,
      productsFound
    } = this.props

    // If searchTerm or displayTitle present, do not render hero image
    if (searchTerm) {
      let searchTitle = `You searched ‘${searchTerm}’`
      if (!productsFound) searchTitle = `Aw, shucks! 0 results for your search ‘${searchTerm}.’`

      return (
        <div className='default-shop-header'>
          <div className='default-shop-header-title-wrapper'>
            <h1 className='default-shop-header-title default-shop-header-title-search'>{searchTitle}</h1>
          </div>
        </div>
      )
    } else if (displayTitle) {
      return (
        <div className='default-shop-header'>
          <div className='default-shop-header-title-wrapper'>
            <h1 className='default-shop-header-title'>{displayTitle}</h1>
          </div>
        </div>
      )
    } else {
      return (
        <ContentfulRenderer {...media}>
          <div className='roa-tout-overlay'>
            <MirageMarkdown>{description}</MirageMarkdown>
            <div className='roa-tout-buttons'>
              {heroButtons && heroButtons.map((button) => {
                return (
                  <ContentfulRenderer {...button} key={button.sys.id} />
                )
              })}
            </div>
          </div>
        </ContentfulRenderer>
      )
    }
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
        {this.renderContent()}
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
