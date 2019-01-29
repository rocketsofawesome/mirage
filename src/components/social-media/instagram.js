import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Instafeed from 'instafeed.js'

import { InlineImage } from 'SRC'

const { REACT_APP_INSTAGRAM_ACCESS_TOKEN, REACT_APP_INSTAGRAM_CLIENT_ID, REACT_APP_INSTAGRAM_USER_ID } = process.env

class BaseInstagram extends React.Component {
  constructor(props) {
    super(props);
    this.instagramRef = null
  }

  componentDidMount () {
    const { limit } = this.props
    if (REACT_APP_INSTAGRAM_ACCESS_TOKEN && REACT_APP_INSTAGRAM_CLIENT_ID && REACT_APP_INSTAGRAM_USER_ID) {
      this.feed = new Instafeed({
      get: 'user',
      target: this.instagramRef,
      clientId: REACT_APP_INSTAGRAM_CLIENT_ID,
      userId: REACT_APP_INSTAGRAM_USER_ID,
      accessToken: REACT_APP_INSTAGRAM_ACCESS_TOKEN,
      resolution: 'standard_resolution',
      limit: limit
    }).run()
    }
  }

  setInstagramRef = (element) => {
    this.instagramRef = element
  }

  render () {
    const { className } = this.props
    return (
      <section className={className} ref={this.setInstagramRef}>
        <InlineImage className='gif' src='https://res.cloudinary.com/roa-canon/image/upload/v1548777765/web/PHONE_ANIM.gif' />
      </section>
    )
  }
}

const Instagram = styled(BaseInstagram)`
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
    z-index: 10;
  }
`

Instagram.propTypes = {
  limit: PropTypes.number
}

Instagram.defaultProps = {
  limit: 4
}

/** @component */
export default Instagram
