import React from 'react'
import PropTypes from 'prop-types'
import {
  Accordion,
  BagIcon,
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

export class MobileNavigation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  closeDrawer = () => {
    this.setState({open: false})
  }

  openDrawer = () => {
    this.setState({open: true})
  }

  render () {
    const {
      boysLinks,
      girlsLinks,
      className,
      drawerPosition,
      loggedIn,
      position,
      renderLink,
      isSubscriptionMember,
      bagCount
    } = this.props
    const { open } = this.state
    return (
      <div className={className}>
        <MobileHeader>
          <BlueHamburger onClick={this.openDrawer} />
          <Logo />
          <BagIcon count={bagCount}/>
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
                      {boysLinks && boysLinks.map((link) => {
                        return (<li><MobileLinkTertiary target={link.target} renderLink={renderLink}>{link.text}</MobileLinkTertiary></li>)
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
                  {girlsLinks && girlsLinks.map((link) => {
                    return (
                      <li>
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

            {!isSubscriptionMember &&
              <li>
                <MobileLinkTop
                  target=''
                  renderLink={renderLink}>
                  Subscribe + Save
                </MobileLinkTop>
              </li>
            }
            {isSubscriptionMember &&
              <div>
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
                <MobileLinkTop>
                  Log In
                </MobileLinkTop>
              </li>
            }
            {loggedIn &&
              <MobileAccountLinks
                isSubscriptionMember={isSubscriptionMember}
                renderLink={renderLink} />
            }
            <li>
              <MobileLinkTop>
                Blog
              </MobileLinkTop>
            </li>
          </UL>
        </MenuDrawer>
      </div>
    )
  }
}

MobileNavigation.propTypes = {
  drawerPosition: PropTypes.string,
  bagCount: PropTypes.number
}

MobileNavigation.defaultProps = {
  drawerPosition: 'fixed',
  bagCount: 5
}

/** @component */
export default MobileNavigation
