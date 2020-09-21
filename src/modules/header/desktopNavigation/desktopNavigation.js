import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  DesktopAccountLinks,
  BagIcon,
  SearchIcon,
  DesktopHeader,
  FlexRow,
  HeaderLink,
  Logo,
  MegaMenu
} from 'SRC'
import { girls, boys, renderLink } from './defaultProps'

const { REACT_APP_SHOW_BLOG_LINK } = process.env

export class BaseDesktopNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boys: {
        visible: false
      },
      girls: {
        visible: false
      }
    }
    this.header = undefined
  }

  closeDrawers = () => {
    this.setState({
      boys: { visible: false },
      girls: { visible: false }
    })
  }

  openDrawer = (currentSection) => () => {
    this.closeDrawers()
    this.setState({
      [currentSection]: { visible: true },
    })
  }

  toggleDrawer = (currentSection) => () => {
    const visibility = this.state[currentSection].visible
    this.closeDrawers(currentSection, false)
    this.setState({
      [currentSection]: { visible: !visibility },
    })
  }

  setHeaderRef = (element) => {
    this.header = element
  }

  render () {
    const {
      className,
      animationLength,
      renderLink,
      isSubscriptionMember,
      highlightable,
      girlsLinks,
      boysLinks,
      bagCount,
      homepageUrl,
      clickBag,
      clickSearch,
      showBlog,
      showSearch,
      ...props
    } = this.props
    const {
      boys: boysState,
      girls: girlsState
    } = this.state

    return (
      <DesktopHeader
        ref={this.setHeaderRef}
        {...props}
        className={className}
        onMouseLeave={this.closeDrawers}>
        <div className='nav-wrapper'>
          <FlexRow
            constrained
            element='nav'>
              <ol>
                <li>
                  <HeaderLink
                    onMouseEnter={this.closeDrawers}
                    onFocus={this.closeDrawers}
                    href={homepageUrl}
                    highlightable={false}
                    renderLink={renderLink}
                    spacing={false}>
                    <span className='screenReader'>Home</span>
                    <Logo />
                  </HeaderLink>
                </li>
                <li>
                  <HeaderLink
                    onMouseEnter={this.openDrawer('girls')}
                    onClick={this.toggleDrawer('girls')}
                    highlightable={highlightable}
                    aria-haspopup>
                    Girls
                  </HeaderLink>
                  <MegaMenu
                    className='megaMenu'
                    regions={girlsLinks.regions}
                    renderLink={renderLink}
                    animationLength={animationLength}
                    {...girlsState} />
                </li>
                <li>
                  <HeaderLink
                    onMouseEnter={this.openDrawer('boys')}
                    onClick={this.toggleDrawer('boys')}
                    highlightable={highlightable}
                    aria-haspopup>
                    Boys
                  </HeaderLink>
                  <MegaMenu
                    className='megaMenu'
                    regions={boysLinks.regions}
                    renderLink={renderLink}
                    animationLength={animationLength}
                    {...boysState} />
                </li>
                <li>
                  <HeaderLink
                    onMouseEnter={this.closeDrawers}
                    onFocus={this.closeDrawers}
                    href={`${homepageUrl}/outfits`}
                    highlightable={highlightable}>
                      Outfits
                  </HeaderLink>
                </li>
                {!isSubscriptionMember &&
                  <li>
                    <HeaderLink
                      onMouseEnter={this.closeDrawers}
                      onFocus={this.closeDrawers}
                      href={`${homepageUrl}/subscribe-and-save`}
                      highlightable={highlightable}>
                        Subscribe + Save
                    </HeaderLink>
                  </li>
                }
                {isSubscriptionMember &&
                  <li>
                    <HeaderLink
                      onMouseEnter={this.closeDrawers}
                      onFocus={this.closeDrawers}
                      highlightable={highlightable}
                      target='/box'
                      renderLink={renderLink}>
                        My Subscription
                    </HeaderLink>
                  </li>
                }
                <li>
                  <HeaderLink
                    onMouseEnter={this.closeDrawers}
                    onFocus={this.closeDrawers}
                    highlightable={highlightable}
                    target='/shop/sale'
                    renderLink={renderLink}>
                      Sale
                  </HeaderLink>
                </li>
                {showBlog &&
                  <span>|</span>
                }
                {showBlog &&
                  <li>
                    <HeaderLink
                      onMouseEnter={this.closeDrawers}
                      onFocus={this.closeDrawers}
                      highlightable={highlightable}
                      target='https://news.rocketsofawesome.com/'
                      renderLink={renderLink}>
                      Blog
                    </HeaderLink>
                  </li>
                }
                {showSearch &&
                  <li className='spacer'>
                    <HeaderLink
                      className='roa-bag-link'
                      justify='flex-end'
                      highlightable={false}
                      onClick={clickSearch}
                      aria-haspopup>
                      <SearchIcon />
                    </HeaderLink>
                  </li>
                }
                {showSearch &&
                  <span className='divider-search'>|</span>
                }
                <li className={showSearch ? undefined : 'spacer'}>
                  <DesktopAccountLinks
                    isSubscriptionMember={isSubscriptionMember}
                    highlightable={highlightable}
                    renderLink={renderLink}
                    {...props} />
                </li>
                <li>
                  <HeaderLink
                    className='roa-bag-link'
                    justify='flex-end'
                    highlightable={false}
                    onClick={clickBag}
                    aria-haspopup>
                    <span aria-hidden>Bag</span>
                    <BagIcon count={bagCount} />
                  </HeaderLink>
                </li>
              </ol>
          </FlexRow>
        </div>
      </DesktopHeader>
    )
  }
}

const DesktopNavigation = styled(BaseDesktopNavigation)`
  width: 100%;
  flex-wrap: wrap;
  z-index: 100;
  .nav-wrapper {
    position: relative
    width: 100%;
  }
  nav {
    display: flex;
    flex-basis: 100%;
    height: 100%;
    > ol {
      display: flex;
      align-items: center;
      padding-left: 0;
      margin: 0;
      flex-basis: 100%;
      height: 100%;
      padding: 0 2rem;
      > li {
        list-style: none;
        display: inline-flex;
        align-items: center;
        height: 100%;
        &:first-of-type {
          flex-basis: 25%;
          width: 25%;
          max-width: 42rem;
          * {
            width: 100%;
          }
        }
        &:last-of-type > a > span > span {
          padding-left: 1rem;
        }
      }
      > span {
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 1.4rem;
        color: #333;
      }
    }
  }
  .spacer {
    margin-left: auto;
  }
  ${Logo} {
    width: 100%;
  }
  .megaMenu {
    position: absolute;
    left: 0;
    right: 0;
    top: 60px;
  }
  .screenReader {
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: capitalize;
  }
  .roa-bag-link > span {
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1009px){
      > span {
        display: none;
      }
    }

  }
  ${BagIcon} {
    margin-left: 0.5rem;
  }

  ${SearchIcon} {
    margin-left: 0.5rem;
  }

  .divider-search {
    font-size: 2rem;
    color: #0073D1;
  }
`

BaseDesktopNavigation.propTypes = {
  className: PropTypes.string,
  loggedIn: PropTypes.bool,
  animationLength: PropTypes.number,
  renderLink: PropTypes.func,
  isSubscriptionMember: PropTypes.bool,
  girlsLinks: PropTypes.object,
  boysLinks: PropTypes.object,
  bagCount: PropTypes.number,
  homepageUrl: PropTypes.string,
  clickBag: PropTypes.func,
  clickSearch: PropTypes.func
}

BaseDesktopNavigation.defaultProps = {
  animationLength: 300,
  renderLink: renderLink,
  //Only used for snapshot testing
  highlightable: true,
  girlsLinks: girls,
  boysLinks: boys,
  homepageUrl: 'https://rocketsofawesome.com',
  showBlog: REACT_APP_SHOW_BLOG_LINK,
  showSearch: false
}

/** @component */
export default DesktopNavigation
