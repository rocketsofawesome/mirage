import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { HeaderLink, SubMenu } from 'SRC'

export class BaseAccountLinks extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subMenuOpen: props.subMenuOpen
    }
  }

  toggleSubmenu = () => {
    const { subMenuOpen } = this.state
    this.setState({subMenuOpen: !subMenuOpen})
  }

  signOut = () => {
    const { signOut } = this.props
    this.toggleSubmenu()
    signOut()
  }

  render () {
    const {
      className,
      highlightable,
      isSubscriptionMember,
      loggedIn,
      renderLink,
      name,
      ...props
    } = this.props
    delete props.subMenuOpen
    delete props.signOut
    const { subMenuOpen } = this.state
    if (loggedIn) {
      const classes = classNames(className, {
        'active': subMenuOpen
      })
      return (
        <div className={classes}>
          <HeaderLink
            onClick={this.toggleSubmenu}
            highlightable={false}>
            {name}
          </HeaderLink>
          <SubMenu
            open={subMenuOpen}
            renderLink={renderLink}
            isSubscriptionMember={isSubscriptionMember}
            signOut={this.signOut}
            {...props} />
          </div>
      )
    } else {
      return (
        <HeaderLink
          className={className}
          target='/shop/login'
          renderLink={renderLink}
          highlightable={highlightable}
          {...props} >
            Login
        </HeaderLink>
      )
    }
  }
}

const DesktopAccountLinks =  styled(BaseAccountLinks)`
display: inline-flex;
position: relative;
${HeaderLink} {
  flex: 0 0 auto;
  display: inline-flex;
  border: 0.1rem solid transparent;
  margin: 0;
  padding: 0 1rem;
}
&.active ${HeaderLink} {
  border: 0.1rem solid ${props => props.theme.colors.rocketBlue};
  transition: all 0.25s ease-in-out;
}
`

DesktopAccountLinks.propTypes = {
  className: PropTypes.string,
  isSubscriptionMember: PropTypes.bool,
  loggedIn: PropTypes.bool,
  name: PropTypes.string,
  renderLink: PropTypes.func,
  subMenuOpen: PropTypes.bool
}

DesktopAccountLinks.defaultProps = {
  subMenuOpen: false,
  //Used in snap shot testing only
  highlightable: true
}

/** @component */
export default DesktopAccountLinks
