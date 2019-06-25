import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme }  from 'styled-components'
import ReactImageMagnify from 'react-image-magnify'

import {
  Default,
  Desktop,
  FlexCol,
  ROASlider,
  Thumbnails
} from 'SRC'

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
          transformation: 'pdp',
          format: 'jpg'
        }),
        alt: image.alt
      })
    })
    this.config = {
      infinite: true,
      lazyLoad: 'progressive',
      arrows: false,
      slidesToShow: 1,
      dots: true,
      dotsClass: 'dots'
    }
  }

  thumbnailClick = (index) => () => {
    const { images } = this.props
    this.setState({activeImage: images[index]})
  }

  render() {
    const { className, images: inImages } = this.props
    const { activeImage } = this.state
    const images = inImages.map((image) => {
      return {
        src: cloudinary.url(image.src, {
          transformation: 'pdp',
          format: 'jpg'
        }),
        alt: image.alt
      }
    })
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
        <Desktop display='flex' className='roa-row'>
          <FlexCol
            active={activeImage.src}
            element={Thumbnails}
            desktop={{width: 2}}
            thumbnails={this.thumbnails}
            onClick={this.thumbnailClick} />
          <FlexCol
            desktop={{width: 10}}>
            <ReactImageMagnify
              className='imageZoom'
              {...{
                smallImage: {
                  ...smallImage
                },
                largeImage: {
                  ...largeImage
                }
              }} />
            </FlexCol>
        </Desktop>
        <Default>
          <ROASlider className='slider' images={images} />
        </Default>
      </div>
    )
  }
}

export const Gallery = styled(BaseGallery)`
  .imageZoom {
    z-index: 1;
  }
  ${ROASlider} {
    ${props => props.theme.breakpointsVerbose.aboveTabletMax`
      width: 50%;
    `}
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
