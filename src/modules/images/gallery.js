import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme }  from 'styled-components'
import ReactImageMagnify from 'react-image-magnify'

import { FlexRow, FlexCol, Thumbnails } from 'SRC'
import cloudinary from 'SRC/services/cloudinary'

export class BaseGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImage: props.images[props.activeImage]
    }
    this.thumbnails = props.images.map((image) => {
      return ({
        src: cloudinary.url(image.src, {
          width: 120,
          crop: 'fit',
          format: 'jpg'
        }),
        alt: image.alt
      })
    })
  }

  thumbnailClick = (index) => () => {
    const { images } = this.props
    this.setState({activeImage: images[index]})
  }

  render() {
    const { className, theme } = this.props
    const { activeImage } = this.state

    const smallImage = {
      src: cloudinary.url(
      activeImage.src, {
        transformation: 'pdp',
        format: 'jpg'
      }),
      alt: `${activeImage.alt} Main Image`,
      isFluidWidth: true
    }
    const largeImage = {
      src: cloudinary.url(
      activeImage.src, {
        transformation: 'pdp_large',
        format: 'jpg'
      }),
      alt: `${activeImage.alt} Main Enlarged Image`,
      width: 1440,
      height: 1989
    }
    return (
      <div className={className}>
        <FlexRow>
          <FlexCol
            active={activeImage.src}
            element={Thumbnails}
            desktop={{width: 2}}
            thumbnails={this.thumbnails}
            onClick={this.thumbnailClick} />
          <FlexCol
            className='imageZoom'
            desktop={{width: 10}}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  ...smallImage
                },
                largeImage: {
                  ...largeImage
                }
              }} />
            </FlexCol>
        </FlexRow>
      </div>
    )
  }
}

export const Gallery = styled(BaseGallery)`
  .imageZoom {

  }
`

Gallery.propTypes = {
  activeImage: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired
}

Gallery.defaultProps = {
  activeImage: 0
}

/** @component */

export default withTheme(Gallery)
