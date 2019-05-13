import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class BaseFacebookShare extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick ({ target: { dataset: { href } } }) {
    const { url, name, referralClicked } = this.props
    referralClicked('share_via_facebook', 'Click to Refer via Facebook')
    window.FB.ui({
      method: 'share',
      href: `${url}&name=${name}`
    })
  }

  render () {
    return (
      <div
        className={`${this.props.className} facebook-jssdk`}
        onClick={this.handleClick} />
    )
  }
}

BaseFacebookShare.propTypes = {
  referralClicked: PropTypes.func.isRequired,
  url: PropTypes.string,
  name: PropTypes.string
}

const FacebookShare = styled(BaseFacebookShare)`
  height: 50px;
  width: 50px;
  background-color: #3c5a99;
  border-radius: 50%;
  background-image: url(https://d2lknnt52h7uhg.cloudfront.net/roa-canon/v1483729648/web/social/facebook.png);
  background-repeat: no-repeat;
  background-size: 10.8px;
  background-position: center;
  margin-top: 25px;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-left: 20px;
  `}
  &:hover {
    cursor: pointer;
  }
`

export default FacebookShare
