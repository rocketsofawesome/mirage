import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CallToActionLink = ({alt, className, href, text}) => {
  return (
    <div className={className}>
      <img src={href} alt={alt}/>
      <div className='ctaText'>{text}</div>
    </div>
  )
}

CallToActionLink.propTypes = {
  className: PropTypes.string,
  slide: PropTypes.object
}

const StyledCallToAction = styled(CallToActionLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.primaryFont};
  text-align: center;
  background-color: ${props => props.theme.colors.lightBlue[1]};
  color: ${props => props.theme.colors.navy};
  height: 100%;
  border: 2px solid ${props => props.theme.colors.gray[3]};
  width: 254px;
  @media (min-width: 1009px) {
    width: 334px;
  }
  @media (min-width: 1850px) {
    width: 444px;
  }
  img {
    width: 90px;
    height: 90px;
    margin-top: 40px;
    @media (min-width: ) {
      margin-top: 91px;

      width: 119px;
      height: 119px;
    }
  }
  .ctaBtn {
    width: 148px;
    height: 37px;
    background-color: ${props => props.theme.colors.yellow};

    display: flex!important;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.rocketBlue};
    font-size: 15px;
    text-transform: uppercase;
  }
  .ctaBtn:hover, .ctaBtn a:hover {
    text-decoration: none;
    background-color: ${props => props.theme.colors.yellowHover}
    color: black;

    opacity: 0.5;
  }
}

.ctaText {
  margin: 0 30px 15px;
  max-width: 275px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 24px;

  @media (min-width: 1009px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
}
`

export default StyledCallToAction
