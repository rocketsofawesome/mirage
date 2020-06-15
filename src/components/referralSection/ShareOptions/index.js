import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard'

import { Button } from '../../inputs'
import FacebookShare from '../FacebookShare'
import TwitterShare from '../TwitterShare'
import PinterestShare from '../PinterestShare'

const UrlField = styled.div`
  max-width: 330px;
  margin: 0 auto;
`

const UrlInput = styled.input`
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 0 10px;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 16px;
  font-weight: 300;
  flex: 1 1 auto;
  height: 48px;
  color: ${props => props.theme.colors.navyBlue};
`

const CopyButton = styled(Button)`
  background-color: ${props => props.theme.colors.lightBlue1};
  color: ${props => props.theme.colors.navyBlue};
  border-radius: 0;
  margin-left: -3px;
  margin-top: 1px;
  &:hover {
    background-color: darken(${props => props.theme.colors.lightBlue1}, 10%);
  }
`

const InputHelp = styled.div`
  max-width: 330px;
  margin: 0 auto;
  background-color: #fafafa;
  border: 1px solid ${props => props.theme.colors.gray4};
  border-top: none;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 11px;
  text-transform: uppercase;
  padding: 2px 15px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.navyBlue};
`

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    margin-left: 25px;
  }

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    width: auto;
    align-items: flex-start;
    height: auto;
  `}
`

class ShareOptions extends Component {
  static defaultProps = {
    showShareButtons: true
  }

  constructor (props) {
    super(props)
    this.state = { copied: false }
    this.onCopy = this.onCopy.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  onCopy () {
    this.setState({ copied: true })
    setTimeout(this.resetState, 2500)
  }

  resetState () {
    this.setState({ copied: false })
  }

  render () {
    const { className, showShareButtons, homepageUrl, referralCode, name, referralClicked, referralValue } = this.props
    const { copied } = this.state
    const url = `${homepageUrl}/subscribe-and-save?r=${referralCode}`

    return (
      <div className={className}>
        <UrlField>
          <UrlInput type='text' readOnly value={url} />
          <CopyToClipboard text={url} onCopy={this.onCopy}>
            <CopyButton>
              Copy
            </CopyButton>
          </CopyToClipboard>
        </UrlField>
        {copied && <InputHelp>Link copied to clipboard</InputHelp>}
        {showShareButtons &&
          <ShareButtons>
            <FacebookShare url={url} referralClicked={referralClicked} name={name} />
            <TwitterShare url={url} referralValue={referralValue} referralClicked={referralClicked} />
            <PinterestShare url={url} referralValue={referralValue} referralClicked={referralClicked} />
          </ShareButtons>
        }
      </div>
    )
  }
}

ShareOptions.propTypes = {
  referralCode: PropTypes.string.isRequired,
  showShareButtons: PropTypes.bool,
  homePageUrl: PropTypes.string,
  referralClicked: PropTypes.func,
  name: PropTypes.string,
  referralValue: PropTypes.string,
  className: PropTypes.string
}

export default ShareOptions
