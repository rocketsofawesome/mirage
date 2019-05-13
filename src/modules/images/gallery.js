import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme }  from 'styled-components'
import ReactImageMagnify from 'react-image-magnify'
import Slider from 'react-slick'

import { FlexCol, InlineImage, Thumbnails, Desktop, Default } from 'SRC'
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
    const { className, images } = this.props
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
          <Slider className='slider' {...this.config}>
            {images.map((image, index) => {
              return (
                <InlineImage key={index} className='image' src={cloudinary.url(image.src)} alt={image.alt} />
              )
            })}
          </Slider>
        </Default>
      </div>
    )
  }
}

export const Gallery = styled(BaseGallery)`
  .imageZoom {
    z-index: 1;
  }
  .slider {
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    `}
    ${props => props.theme.breakpointsVerbose.aboveTabletMax`
      width: 50%;
    `}
  }
  .slider .image {
    width: 100%;
  }
  .dots {
    position: absolute;
    bottom: 15px;

    display: block;

    width: 100%;
    padding: 0;
    margin: 0;

    list-style: none;

    text-align: center;
    li {
      position: relative;

      display: inline-block;

      width: 7px;
      height: 7px;
      margin: 0 2px;
      padding: 0;

      cursor: pointer;

      button {
        font-size: 0;
        line-height: 0;

        display: block;

        width: 7px;
        height: 7px;
        padding: 2px;

        cursor: pointer;

        color: transparent;
        border: 0;
        outline: none;
        background: transparent;

        &:hover, &:focus {
          outline: none;
        }

        &:hover:before, &:focus:before {
          opacity: 1;
        }

        &:before {
          font-family: 'slick';
          font-size: 6px;
          line-height: 5px;

          position: absolute;
          top: 0;
          left: 0;

          width: 7px;
          height: 7px;

          content: '•';
          text-align: center;

          border: ${props => props.theme.colors.navy} solid 2px;
          border-radius: 15px;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
      }
    }
    .slick-active {
      button {
        &:before {
          background-color: ${props => props.theme.colors.navy} !important;
          border: 2px solid transparent!important;
        }
      }
    }
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
