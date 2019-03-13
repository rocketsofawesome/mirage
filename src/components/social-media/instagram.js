import React from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import styled, { withTheme } from 'styled-components'
import Slider from 'react-slick'
import Instafeed from 'instafeed.js'

import { InlineImage } from 'SRC'

const { REACT_APP_INSTAGRAM_ACCESS_TOKEN, REACT_APP_INSTAGRAM_CLIENT_ID, REACT_APP_INSTAGRAM_USER_ID } = process.env

class BaseInstagram extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.instagramRef = null

    this.config = {
      infinite: false,
      arrows: false,
      className: 'slider',
      centerMode: true,
      slidesToShow: 1,
      variableWidth: true
    }
    this.state = {
      instagramLoading: true,
      instagramPictures: []
    }
  }

  componentDidMount () {
    this._isMounted = true
    const { limit, clientId, userId, accessToken } = this.props
    if (clientId && userId && accessToken) {
      this.feed = new Instafeed({
      get: 'user',
      target: this.instagramRef,
      clientId: clientId,
      userId: userId,
      accessToken: accessToken,
      resolution: 'standard_resolution',
      limit: limit,
      template: '<a class="image-link" aria-label="{{caption}}" href="{{link}}"><img src="{{image}}" aria-hidden /></a>',
      success: (args) => this.setInstragramPics(args)
    }).run()
    }
  }

  componentWillUnmount () {
    this._isMounted = false
  }

  setInstragramPics = (args) => {
    if (this._isMounted) {
      this.setState({instagramLoading: false, instagramPictures: args.data})
    }
  }

  setInstagramRef = (element) => {
    this.instagramRef = element
  }

  render () {
    const { className, theme } = this.props
    const { instagramLoading, instagramPictures } = this.state
    return (
      <div className={className}>
        <MediaQuery query={theme.breakpoints.aboveTabletMax}>
          <section className='desktopContainer' ref={this.setInstagramRef}>
            <InlineImage className='gif' src='https://res.cloudinary.com/roa-canon/image/upload/v1548777765/web/PHONE_ANIM.gif' />
          </section>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 959px)">
          <div className='mobileContainer'>
            {!instagramLoading && <Slider {...this.config}>
              {instagramPictures.map((imageObject, i) => {
                return (<a key={`imageObject-${i}`} href={imageObject.link} target="_blank">
                  <img className='mobileImg' src={imageObject.images.standard_resolution.url} alt='mobile instagram'/>
                </a>)
              })}
            </Slider>}
            <InlineImage className='mobileGif' src='https://res.cloudinary.com/roa-canon/image/upload/v1548777765/web/PHONE_ANIM.gif' />
            <div ref={this.setInstagramRef} style={{display: 'none'}} aria-hidden />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

const Instagram = styled(BaseInstagram)`
  width: 100%;
  .desktopContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > a {
      width: 50%;
      max-width: 28rem;
      padding: 1rem;
      box-sizing: border-box;
      img {
        width: 100%;
        max-width: 26rem;
      }
    }
    .gif {
      height: 260px;
      margin-right: -50px;
      z-index: 0;
    }
  }
  .mobileContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .mobileGif {
    width: 14rem;
    left: 0;
    position: absolute;
    padding-left: 5px;
  }
  .mobileImg {
    width: 20rem;
  }
  .slider {
    overflow: hidden;
    > div > div {
      display: flex;
    }
    .slick-slide {
      display: flex;
      justify-content: center;
      padding-right: 20px;
    }
  }
  .image-link {
    font-size: 0px;
  }
`

Instagram.propTypes = {
  limit: PropTypes.number,
  clientId: PropTypes.string,
  userId: PropTypes.string,
  accessToken: PropTypes.string,
  theme: PropTypes.object
}

Instagram.defaultProps = {
  limit: 4,
  clientId: REACT_APP_INSTAGRAM_CLIENT_ID,
  userId: REACT_APP_INSTAGRAM_USER_ID,
  accessToken: REACT_APP_INSTAGRAM_ACCESS_TOKEN
}

/** @component */
export default withTheme(Instagram)
