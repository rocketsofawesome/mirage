import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1, P, Instagram } from 'SRC'
import defaultProps from './defaultProps'

const BaseInstagramRegion = ({className, ariaLabel, content, title, ...props})  => {
  return (
    <section className={className}>
      <H1 aria-label={ariaLabel}>{title}</H1>
      <P>{content}</P>
      <Instagram {...props}/>
    </section>
  )
}

const InstagramRegion = styled(BaseInstagramRegion)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
  }
  ${H1} {
    @media (max-width: 958px) { font-size: 3.4rem; }
  }
  ${H1}, ${P} {
    margin-bottom: 2rem;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
  }
`

InstagramRegion.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  title: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

InstagramRegion.defaultProps = {
  ...defaultProps
}

/** @component */
export default InstagramRegion
