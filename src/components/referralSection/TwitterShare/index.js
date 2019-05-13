import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseTwitterShare = ({ className, url, referralValue, referralClicked}) => {
  return <a
      className={className}
      target='_blank'
      onClick={() => referralClicked('share_via_twitter', 'Click to Refer via Twitter')}
      href={`https://twitter.com/intent/tweet?text=Rockets of Awesome makes
  one-of-a-kind kids clothes! Sign up with my link to get ${referralValue} off your
  first purchase. Shipping and returns are free and there’s no commitment
  (i.e. no reason not to try!). ${url}`} />
}

BaseTwitterShare.propTypes = {
  referralClicked: PropTypes.func.isRequired,
  url: PropTypes.string
}

const TwitterShare = styled(BaseTwitterShare)`
  display: flex;

  width: 50px;
  height: 50px;
  margin-top: 25px;

  border-radius: 50%;
  background-color: #1da1f2;
  background-image: url('https://d2lknnt52h7uhg.cloudfront.net/roa-canon/v1483729648/web/social/twitter.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 23px;

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-left: 20px;
  `}
  &:hover {
    cursor: pointer;
  }
`

export default TwitterShare
