import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WhiteLink } from 'SRC/components/link'

const UnstyledComponentsListRenderer = ({ className, items }) => {
  return (
    <ul className={className}>
      {items.map(({ heading, visibleName, href, content, external }) => (
        <li
          key={href}>
          <WhiteLink
            href={href}
            target={external ? '_blank' : undefined}
            uppercase>
            {visibleName}
          </WhiteLink>
          {content}
        </li>
        ))}
    </ul>
  )
}

const ComponentsListRenderer = styled(UnstyledComponentsListRenderer)`
  list-style: none;
  border-top: 1px solid rgba(0,0,0, 0.3);
  padding-top: 0.75rem;
  padding-left: 1.6rem;
  > li {
    padding: 0.75rem 0;
  }
`

ComponentsListRenderer.propTypes = {

}

/** @component */
export default ComponentsListRenderer
