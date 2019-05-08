import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  DesktopAccountLinks,
  BagIcon,
  DesktopHeader,
  FlexRow,
  HeaderLink,
  Logo,
  MegaMenu
} from 'SRC'
import { girls, boys, renderLink } from './defaultProps'

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
      clickBag
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
                    highlightable={false}
                    renderLink={renderLink}
                    spacing={false}>
                    <span className='screenReader'>Home</span>
                    <Logo  />
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
                  {!isSubscriptionMember &&
                    <HeaderLink
                      onMouseEnter={this.closeDrawers}
                      onFocus={this.closeDrawers}
                      href={`${homepageUrl}?view=subscribe`}
                      highlightable={highlightable}>
                        Subscribe + Save
                    </HeaderLink>
                  }
                  {isSubscriptionMember &&
                    <HeaderLink
                      onMouseEnter={this.closeDrawers}
                      onFocus={this.closeDrawers}
                      highlightable={highlightable}
                      target='/box'
                      renderLink={renderLink}>
                        My Subscription
                    </HeaderLink>
                  }
                </li>
                <span>|</span>
                <li>
                  <HeaderLink
                    href='https://news.rocketsofawesome.com'
                    highlightable={highlightable}>
                      Blog
                  </HeaderLink>
                </li>
                <li className='spacer'>
                  <DesktopAccountLinks
                    isSubscriptionMember={isSubscriptionMember}
                    highlightable={highlightable}
                    renderLink={renderLink}
                    {...props} />
                </li>
                <li>
                  <HeaderLink
                    justify='flex-end'
                    highlightable={highlightable}
                    onClick={clickBag}
                    aria-haspopup>
                    <span aria-hidden>Bag</span>
                    <span className='screenReader'>Bag</span>
                    <BagIcon count={bagCount}/>
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
      > li {
        list-style: none;
        display: flex-inline;
        align-items: center;
        height: 100%;
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
    width: 36rem;
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
  ${BagIcon} {
    margin-left: 0.5rem;
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
  clickBag: PropTypes.func
}

BaseDesktopNavigation.defaultProps = {
  animationLength: 300,
  renderLink: renderLink,
  //Only used for snapshot testing
  highlightable: true,
  girlsLinks: girls,
  boysLinks: boys,
  bagCount: 5,
  homepageUrl: 'https://rocketsofawesome.com'
}

/** @component */
export default DesktopNavigation
