import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Instafeed from 'instafeed.js'

const { REACT_APP_INSTAGRAM_ACCESS_TOKEN, REACT_APP_INSTAGRAM_CLIENT_ID, REACT_APP_INSTAGRAM_USER_ID } = process.env

class BaseInstagram extends React.Component {
  constructor(props) {
    super(props);
    this.instagramRef = null
  }

  componentDidMount () {
    console.log(this)
    const { limit } = this.props
    this.feed = new Instafeed({
      get: 'user',
      target: this.instagramRef,
      clientId: REACT_APP_INSTAGRAM_CLIENT_ID,
      userId: REACT_APP_INSTAGRAM_USER_ID,
      accessToken: REACT_APP_INSTAGRAM_ACCESS_TOKEN,
      limit: limit
    }).run()
  }

  setInstagramRef = (element) => {
    this.instagramRef = element
  }

  render () {
    const { className } = this.props
    return (
      <section className={className} ref={this.setInstagramRef}></section>
    )
  }
}

const Instagram = styled(BaseInstagram)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > a {
    width: 50%;
    max-width: 17rem;
    padding: 1rem;
    box-sizing: border-box;
    img {
      width: 100%;
      max-width: 15rem;
    }
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
