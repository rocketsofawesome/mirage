import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Accordion,
  BagIcon,
  SearchIcon,
  BlueHamburger,
  Logo,
  MenuDrawer,
  MobileHeader,
  MobileLinkSecondary,
  MobileLinkTertiary,
  MobileLinkTop,
  MobileAccountLinks,
  UL
} from 'SRC'

import { theme } from 'SRC/core/theme'

const { REACT_APP_OUTFIT_NAV, REACT_APP_SHOW_BLOG_LINK } = process.env

export class BaseMobileNavigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = { open: false }
  }

  closeDrawer = () => {
    this.setState({ open: false })
  }

  openDrawer = () => {
    this.setState({ open: true })
  }

  render () {
    const {
      boysLinks,
      girlsLinks,
      className,
      drawerPosition,
      loggedIn,
      homepageUrl,
      renderLink,
      isSubscriptionMember,
      bagCount,
      clickBag,
      clickSearch,
      showBlog,
      showSearch,
      outfitNav,
      signOut
    } = this.props

    const { open } = this.state

    return (
      <div className={className}>
        <MobileHeader>
          <BlueHamburger onClick={this.openDrawer} />
          <MobileLinkTop
            className='link-home'
            href={homepageUrl}
            renderLink={renderLink}>
            <span className='screenReader'>Home</span>
            <Logo />
          </MobileLinkTop>
          <div className={showSearch ? 'icons-search-bag' : undefined}>
            {showSearch &&
              <a onClick={clickSearch}>
                <SearchIcon />
              </a>
            }
            {showSearch &&
              <span className='divider-search'>|</span>
            }
            <a onClick={clickBag}>
              <BagIcon count={bagCount} />
            </a>
          </div>
        </MobileHeader>
        <MenuDrawer
          open={open}
          closeDrawer={this.closeDrawer}
          position={drawerPosition}>
          <UL leftPad='1.4rem' type='none'>
            <li>
              <MobileLinkTop
                target='/shop'
                renderLink={renderLink}>
                Shop
              </MobileLinkTop>
              <UL
                leftPad='1rem'
                type='none'>
                <li>
                  <Accordion
                    toggleElement={
                      <MobileLinkSecondary>Boys</MobileLinkSecondary>
                    }>
                    <UL
                      type='none'
                      leftPad='1rem'>
                      {boysLinks && boysLinks.map((link, index) => {
                        return (
                          <li key={index}>
                            <MobileLinkTertiary target={link.target} renderLink={renderLink}>
                              {link.text}
                            </MobileLinkTertiary>
                        </li>
                      )
                      })}
                    </UL>
                  </Accordion>
                </li>
                <li>
                <Accordion
                  toggleElement={
                    <MobileLinkSecondary>Girls</MobileLinkSecondary>
                  }>
                  <UL type='none' leftPad='1rem'>
                  {girlsLinks && girlsLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <MobileLinkTertiary
                          target={link.target}
                          renderLink={renderLink}>
                          {link.text}
                        </MobileLinkTertiary>
                      </li>
                    )
                  })}
                  </UL>
                </Accordion>
                </li>
              </UL>
            </li>
            {outfitNav &&
              <li>
                <MobileLinkTop
                  href={`${homepageUrl}/outfits`}>
                  Outfits
                </MobileLinkTop>
              </li>
            }
            {!isSubscriptionMember &&
              <div>
                <li>
                  <MobileLinkTop
                    href={`${homepageUrl}/shop/sale`}>
                    Sale
                  </MobileLinkTop>
                </li>
                <li>
                  <MobileLinkTop
                    href={`${homepageUrl}/subscribe-and-save`}>
                    Subscribe + Save
                  </MobileLinkTop>
                </li>
              </div>
            }
            {isSubscriptionMember &&
              <div>
              <li>
                <MobileLinkTop
                  href={`${homepageUrl}/shop/sale`}>
                  Sale
                </MobileLinkTop>
              </li>
              <li>
                <MobileLinkTop
                  target='/box'
                  renderLink={renderLink}>
                  Box
                </MobileLinkTop>
              </li>
                <li>
                  <MobileLinkTop
                    target='/invite'
                    renderLink={renderLink}
                    background={theme.colors.lightPink}>
                    Free Clothes
                  </MobileLinkTop>
                </li>
                <li>
                  <MobileLinkTop
                    target='/style-file'
                    renderLink={renderLink}>
                    Style File
                  </MobileLinkTop>
                </li>
                <li>
                  <MobileLinkTop
                    target='/orders'
                    renderLink={renderLink}>
                    Order History
                  </MobileLinkTop>
                </li>
              </div>
            }
            {!loggedIn &&
              <li>
                <MobileLinkTop
                  target='/shop/login'
                  renderLink={renderLink}>
                  Login
                </MobileLinkTop>
              </li>
            }
            {showBlog &&
              <li>
                <MobileLinkTop href={`https://news.rocketsofawesome.com`}>
                  Blog
                </MobileLinkTop>
              </li>
            }
            {loggedIn &&
              <MobileAccountLinks
                isSubscriptionMember={isSubscriptionMember}
                renderLink={renderLink}
                signOut={signOut} />
            }
          </UL>
        </MenuDrawer>
      </div>
    )
  }
}

const MobileNavigation = styled(BaseMobileNavigation)`
  .link-home {
    margin-bottom: 0;
    padding: 0;
  }
  .screenReader {
    font-size: 0;
  }
  ${Logo} {
    padding: 0;
    max-width: 22.4rem;
  }
  ul ul {
    margin-bottom: 2rem;
  }
  ul ul ul {
    margin-bottom: 0;
  }
  .divider-search {
    margin-left: 7px;
    margin-right: 7px;

    font-size: 2rem;
    color: #0073D1;
  }

  .icons-search-bag {
    width: 72px;
  }
`

MobileNavigation.propTypes = {
  drawerPosition: PropTypes.string,
  bagCount: PropTypes.number,
  homepageUrl: PropTypes.string,
  boysLinks: PropTypes.array,
  girlsLinks: PropTypes.array,
  className: PropTypes.string,
  loggedIn: PropTypes.bool,
  renderLink: PropTypes.func,
  isSubscriptionMember: PropTypes.bool,
  clickBag: PropTypes.func,
  clickSearch: PropTypes.func
}

MobileNavigation.defaultProps = {
  drawerPosition: 'fixed',
  homepageUrl: 'https://rocketsofawesome.com',
  outfitNav: REACT_APP_OUTFIT_NAV,
  showBlog: REACT_APP_SHOW_BLOG_LINK,
  showSearch: false
}

/** @component */
export default MobileNavigation
