import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


export class BasePinterestShare extends React.Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//assets.pinterest.com/js/pinit.js'
    document.querySelector('head').appendChild(script)
  }

  handleClick () {
    const { url, referralClicked, referralValue } = this.props
    referralClicked('share_via_pinterest', 'Click to Refer via Pinterest')
    window.PinUtils.pinOne({
      'url': url,
      'media': 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/v1521063498/web/social/pinterest-share.jpg',
      'description': `Get ${referralValue} off Rockets of Awesome when you sign up today!
Their supercool kids clothes are hand-picked based on your child’s unique
preferences—and magically delivered to your door every season.`
    })
  }
  render () {
    return (
      <a
        className={this.props.className}
        data-pin-custom='true'
        data-pin-do='buttonBookmark'
        onClick={this.handleClick} />
    )
  }
}

BasePinterestShare.propTypes = {
  referralClicked: PropTypes.func.isRequired,
  url: PropTypes.string,
  referralValue: PropTypes.string
}

const PinterestShare = styled(BasePinterestShare)`
  width: 50px;
  height: 50px;
  background-image: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1520886939/web/social/pinterest-circle.svg');
  background-size: 50px;
  margin-top: 25px;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-left: 20px;
  `}
  &:hover {
    cursor: pointer;
  }
`

export default PinterestShare
