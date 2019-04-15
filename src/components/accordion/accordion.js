import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import { Chevron } from 'SRC'

const accordionTransition = {
  enter: 'accordionEnter',
  leave: 'accordionLeave'
}

export class BaseAccordion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  toggleAccordion = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    const { className, children, ignoreErrors, label, toggleElement } = this.props
    const { open } = this.state
    const ToggleElement = React.createElement(
      toggleElement.type,
      {
        ...toggleElement.props,
        className: toggleElement.props.className ?
          `${toggleElement.props.className} toggleElement`:
          'toggleElement',
        onClick: this.toggleAccordion
      },
      [toggleElement.props.children, <Chevron key='toggleChevron' down={!open} up={open} ignoreErrors={ignoreErrors}/>]
    )

    return (
      <div
        className={className}
        role='region'
        aria-labelledby={label}>
        {ToggleElement}
        <CSSTransitionGroup
          transitionName={accordionTransition}
          className='drawer'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {open && children}
          </CSSTransitionGroup>
      </div>
    )
  }
}

const openDrawer = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`

const closeDrawer = keyframes`
  0% {
    opacity: 1;
    transform: scaleY(1);
  }
  100% {
    opacity: 0;
    transform: scaleY(0);
  }
`

const Accordion = styled(BaseAccordion)`
  .toggleElement {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1.5rem;

  }
  .toggleElement ${Chevron} {
    margin-left: 1rem;
  }
  .drawer {
    display: flex;
    ul {
      transform-origin: 50% 0 0;
    }
    .accordionEnter {
      animation-name: ${openDrawer};
      animation-duration: 0.6s;

    }
    .accordionLeave {
      animation-name: ${closeDrawer};
      animation-duration: 0.6s;
    }
    * {
      width: 100%;
    }
    li {
      display: flex;
      align-items: center;
      height: 4rem;
    }
  }
`

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  ignoreErrors: PropTypes.bool,
  label: PropTypes.string
}

/** @component */
export default Accordion
