import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'
import classNames from 'classnames'

import {
  FlexCol,
  FlexRow,
  InlineImage,
  MegaMenuSection,
  NavyLink,
} from 'SRC'


const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  10% {
    opacity: 1;
  }
  99% {
    opacity: 0;
    height: auto;
  }
  100% {
    opacity: 0;
    height: 0;
  }
`

export class BaseMegaMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      closed: props.closed,
      closing: props.closing,
      menuImage: undefined
    }
    this.menu = undefined
  }

  componentDidUpdate (prevProps) {
    const { visible: currentlyVisible, animationLength } = this.props
    if (!currentlyVisible && currentlyVisible !== prevProps.visible) {
      this.setState({closing: true})
      setTimeout(() => { this.setState({closed: true})}, animationLength)
    } else if (currentlyVisible && currentlyVisible !== prevProps.visible) {
      this.setState({closed: false, closing: false})
    }
  }

  setRef = (elem) => {
    this.menu = elem
  }
  setMenuImage = (src) => () => {
    this.setState({menuImage: src})
  }

  clearMenuImage = () => {
    this.setState({menuImage: undefined})
  }

  render () {
    const { className, regions, visible } = this.props
    const { menuImage: src, closing, closed } = this.state
    const classes = classNames(className, {
      'opened': visible,
      'closed': closed,
      'closing': closing
    })
    return (
      <div ref={this.setRef} className={classes}>
        <FlexRow element='menu' constrained>
          <FlexCol desktop={{width: 3, span: 2}}>
            {regions.left.map((section, id) => {
              return (
                <MegaMenuSection
                  key={`left-${id}`}
                  section={section}
                  setMenuImage={this.setMenuImage}
                  clearMenuImage={this.clearMenuImage} />
              )
            })}
          </FlexCol>
          <FlexCol desktop={{width: 3}}>
          {regions.right.map((section, id) => {
            return (
              <MegaMenuSection
                key={`right-${id}`}
                section={section}
                setMenuImage={this.setMenuImage}
                clearMenuImage={this.clearMenuImage} />
            )
          })}
          </FlexCol>
          <FlexCol desktop={{width: 4}}>
            <div className='imageContainer'>
              {src && <InlineImage aria-hidden className='menuImage' src={src} />}
            </div>
          </FlexCol>
        </FlexRow>
      </div>
    )
  }
}

const MegaMenu = styled(BaseMegaMenu)`
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 1px 0 rgba(0,0,0,.16);
  border-top: 0.2rem solid ${props => props.theme.colors.rocketBlue};
  border-bottom: 0.2rem solid ${props => props.theme.colors.rocketBlue};
  z-index: 100;
  &.closed {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  &.closing {
    opacity: 0;
    animation: ${FadeOut} ${props => (props.animationLength / 1000)}s ease-in;
  }
  &.opened {
    opacity: 1;
    animation: ${FadeIn} ${props => (props.animationLength / 1000)}s ease-in;
  }
  ${NavyLink} {
    margin-bottom: 1rem;
    display: inline-block;
  }

    li {
      list-style: none;
    }
  }
  .imageContainer {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .menuImage {
    position: absolute;
    left: 0;
    top: 0;
    width: auto;
    max-width: 100%;
    max-height: 30rem;
    margin-top: 2rem;
    border: 0.1rem solid ${props => props.theme.colors.rocketBlue};
    border-radius: 0.2rem;
    animation: ${FadeIn} ${props => (props.animationLength / 1000)}s ease-in;
  }
`

MegaMenu.propTypes = {
  animationLength: PropTypes.number,
  className: PropTypes.string,
  closed: PropTypes.bool,
  closing: PropTypes.bool,
  regions: PropTypes.shape({
    left: PropTypes.array,
    right: PropTypes.array
  }),
  visible: PropTypes.bool
}

MegaMenu.defaultProps = {
  closed: true,
  closing: false,
  animationLength: 300,
  visible: false
}

/** @component */
export default MegaMenu
