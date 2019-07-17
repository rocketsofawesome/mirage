import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'SRC'
import PropTypes from 'prop-types'

const transition = {
  enter: 'enter',
  leave: 'leave'
}

const slideDown = keyframes`
  0% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(-1px);
  }
`
const position = css`
position: absolute;
transform: translateY(-1px);
top: 100%;
right: -1px;
z-index: 10;
.subMenu {
  position: absolute;
  top: 100%;
  right: 0;
  flex-wrap: wrap;
  height: auto;
  > * {
    width: 100%;
  }
}
`

export class BaseSubMenu extends React.Component {
  render () {
    const { className, childCount, open, signOut, isSubscriptionMember, renderLink } = this.props
    return (
      <CSSTransitionGroup
        transitionName={transition}
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
        className={className}>
        {open &&
          <nav className='subMenu'>
            {isSubscriptionMember &&
              <div>
                <Link
                  uppercase
                  underline={false}
                  target='/style-file'
                  renderLink={renderLink}>
                  Style File
                </Link>
                <Link
                  uppercase
                  underline={false}
                  target='/deliveries'
                  renderLink={renderLink}>
                  Manage Deliveries
                </Link>
              </div>
            }
            <Link
              uppercase
              underline={false}
              target='/orders'
              renderLink={renderLink}>
              Order History
            </Link>
            <Link
              uppercase
              underline={false}
              target='/account'
              renderLink={renderLink}>
              My Account
            </Link>
            { (isSubscriptionMember && childCount < 4) &&
              <Link
                uppercase
                underline={false}
                target='/add-kid'
                renderLink={renderLink}>
                Add a Child
              </Link>
            }
            <Link
              uppercase
              underline={false}
              onClick={signOut}>
              Log Out
            </Link>
          </nav>
        }
      </CSSTransitionGroup>
    )
  }
}

const SubMenu = styled(BaseSubMenu)`
  ${props => !props.inline ? position : ''}
  .subMenu {
    width: 225px;
    border: 1px solid ${props => props.theme.colors.rocketBlue};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.4);
    background-color: ${props => props.theme.colors.white};
      ${Link} {
        height: 50px;
        padding: 0 26px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        &:hover {
          background-color: ${props => props.theme.colors.rocketBlue};
          color: ${props => props.theme.colors.white};
          transition: all 0.25s ease-in-out;
        }
      }
    }

  .enter {
    z-index: 3;
    animation: ${slideDown} 0.25s;
    transform: translateY(-1px);
  }
  .leave {
    z-index: 3;
    transition: transform 0.25s ease-in;
    transform: translateY(-60px);
  }
`


SubMenu.propTypes = {
  open: PropTypes.bool,
  currentPath: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  signOut: PropTypes.func,
  childCount: PropTypes.number,
  isSubscriptionMember: PropTypes.bool
}

SubMenu.defaultProps = {
  childCount: 0,
  isSubscriptionMember: false,
  signOut: () => alert('Signing Out')
}

/** @component */
export default SubMenu
