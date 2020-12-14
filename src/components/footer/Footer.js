import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexRow, FlexCol, WhiteLink, H5, H2, P, InlineImage, ButtonLink } from 'SRC'

const LINKS = {
  'faq': 'https://support.rocketsofawesome.com/hc/en-us',
  'facebook': 'https://www.facebook.com/Rocketsofawesome',
  'twitter': 'https://twitter.com/rocketsofawesom',
  'instagram': 'https://www.instagram.com/rocketsofawesome',
  'snapchat': 'https://www.snapchat.com/add/rocketsofawesom',
  'contact-us': 'https://support.rocketsofawesome.com/hc/en-us/articles/115015922347',
  'returns': 'https://support.rocketsofawesome.com/hc/en-us/articles/360031271434-How-do-returns-work-for-my-online-order'
}

const BaseFooter = ({
  className,
  isNotSubscriber,
  isSubscriptionMember,
  homepageUrl,
  referrerAmount,
  referredUserAmount
}) => (
  <footer className={className} id='global-footer'>
    <FlexRow constrained>
      <FlexCol mobile={{width: 4}} desktop={{width: 6}}>
        <FlexRow constrained>
          <FlexCol gutter='15px' mobile={{width: 2}} desktop={{width: 3}}>
            <H5>MORE</H5>
            <ul>
              {isNotSubscriber &&
                <li>
                  <WhiteLink light href={`${homepageUrl}/subscribe-and-save`}>Subscribe + Save</WhiteLink>
                </li>
              }
              <li>
                <WhiteLink light href={`${homepageUrl}/about`} target='_blank'>About Us</WhiteLink>
              </li>
              <li>
                <WhiteLink light href='https://news.rocketsofawesome.com/' target='_blank'>The Awesome News</WhiteLink>
              </li>
              <li>
                <WhiteLink light href='https://rocketsofawesome.recruiterbox.com/' target='_blank'>Careers</WhiteLink>
              </li>
            </ul>
          </FlexCol>
          <FlexCol gutter='15px' mobile={{ width: 2 }} desktop={{ width: 3 }}>
            <H5>SUPPORT</H5>
            <ul>
              <li>
                <WhiteLink light href={LINKS['faq']} target='_blank'>Help</WhiteLink>
              </li>
              <li>
                <WhiteLink light href={LINKS['returns']} target='_blank'>Returns</WhiteLink>
              </li>
            </ul>
          </FlexCol>

          <FlexCol gutter='15px' mobile={{width: 4}} desktop={{width: 6}}>
            <div className='mobileSeparator' />
            <H5>CUSTOMER SERVICE</H5>
            <ul>
              <li>
                <WhiteLink light href='mailto:help@rocketsofawesome.com'>help@rocketsofawesome.com</WhiteLink>
              </li>
            </ul>
            <div className='mobileSeparator' />
          </FlexCol>
        </FlexRow>
        <FlexRow constrained className='socialLinks'>
          <FlexCol gutter='15px' mobile={{width: 4}} desktop={{width: 12}}>
            <div>
              <a href={LINKS['instagram']} target='_blank'>
                <InlineImage src='https://d2lknnt52h7uhg.cloudfront.net/roa-canon/q_auto:good/web/social/instagram.png' alt='instagram' />
              </a>
              <a href={LINKS['facebook']} target='_blank'>
                <InlineImage src='https://d2lknnt52h7uhg.cloudfront.net/roa-canon/q_auto:good/web/social/facebook.png' alt='facebook' />
              </a>
              <a href={LINKS['twitter']} target='_blank'>
                <InlineImage src='https://d2lknnt52h7uhg.cloudfront.net/roa-canon/q_auto:good/web/social/twitter.png' alt='twitter' />
              </a>
              <a href={LINKS['snapchat']} target='_blank'>
                <InlineImage src='https://d2lknnt52h7uhg.cloudfront.net/roa-canon/q_auto:good/web/social/snapchat.png' alt='snapchat' />
              </a>
            </div>
          </FlexCol>
        </FlexRow>
      </FlexCol>
      {isSubscriptionMember &&
        <FlexCol
          className='referrals'
          gutter='15px'
          mobile={{width: 4}}
          desktop={{width: 4, span: 1}}>
            <H2>Share the awesome, get ${referrerAmount}</H2>
            <P>
              Get ${referrerAmount} when your friend subscribes
              —they’ll get a free outfit
              (${referredUserAmount} value)!
            </P>
            <div className='referralButton'>
              <ButtonLink href='/invite' kind='pink' width='100%' maxWidth='290px'>
                GET ${referrerAmount}
              </ButtonLink>
            </div>
        </FlexCol>
      }
    </FlexRow>

    <div className='footerBottom'>
      <div className='desktopSeparator'/>

      <FlexRow constrained>
        <FlexCol mobile={{width: 4}} desktop={{width: 6}}>
          <P fontSize='1.4rem'>© {new Date().getFullYear()} Rockets of Awesome. All Rights Reserved</P>
        </FlexCol>
        <FlexCol
          className='commonLinks'
          mobile={{width: 4}}
          desktop={{width: 6}}>
          <WhiteLink light href={`${homepageUrl}/terms`} target='_blank'>Terms &amp; Conditions</WhiteLink>
          <WhiteLink light href={`${homepageUrl}/privacy`} target='_blank'>Privacy Policy</WhiteLink>
          <WhiteLink light href={`${homepageUrl}/accessibility`} target='_blank'>Accessibility</WhiteLink>
        </FlexCol>
      </FlexRow>
    </div>
  </footer>
)

const Footer = styled(BaseFooter)`
  background-color: ${props => props.theme.colors.rocketBlue};
  padding: 30px 0px 25px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 1.4rem;

  .socialLinks {
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;

    a {
      margin-right: 50px;
    }

    a:last-child {
      margin-right: 0;
    }
  }

  .mobileSeparator {
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: ${props => props.theme.colors.gray4};
    height: 1px;
    display: block;
  }

  .gutter {
    padding-left: 15px;
    padding-right: 15px;
  }

  .commonLinks {
    padding-bottom: 20px;
    a {
      margin-top: 15px;
      display: block;
    }
  }

  .referrals {
    text-align: center;
  }

  ul {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 10px;
    }
  }

  img {
    height: 24px;
  }

  p {
    color: ${props => props.theme.colors.white};
  }

  h5 {
    color: ${props => props.theme.colors.white};
    font-style: normal;
    letter-spacing: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h2 {
    color: ${props => props.theme.colors.white};
    margin-top: 0;
  }

  .referralButton {
    padding-top: 20px;
  }

  .footerBottom {
    margin-top: 40px;
    text-align: center;
  }

  ${props => props.theme.media.tablet`
    padding: 55px 100px 35px;

    .desktopSeparator {
      background-color: ${props => props.theme.colors.gray4};
      height: 1px;
      margin-top: 40px;
      margin-bottom: 25px;
    }

    .mobileSeparator {
      display: none;
    }

    .socialLinks {
      margin-bottom: 0;
      text-align: left;
    }

    .footerBottom {
      margin-top: 0;
      text-align: left;
    }

    .referrals {
      text-align: left;
    }

    .commonLinks {
      text-align: right;
      padding-bottom: 0;
      a {
        margin-top: 0;
        display: inline;
        margin-left: 15px;
      }
    }
  `}
`

Footer.propTypes = {
  className: PropTypes.string,
  isNotSubscriber: PropTypes.bool,
  isSubscriptionMember: PropTypes.bool,
  referralAmount: PropTypes.string,
  referredUserAmount: PropTypes.string
}

/** @component */
export default Footer
