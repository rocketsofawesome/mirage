import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {SubscriptionSectionProps as defaultProps} from './defaultProps'
import { FlexRow, FlexCol, H1, H3, P, Link } from 'SRC'

const SubscriptionSection = styled((props) => {
  const { className, children } = props
  const { header, details, footer } = children
  return (
    <section className={className}>
      <FlexCol mobile={{width: 4}} desktop={{width: 8, span: 2}}>
        <header>
          <H1>{header.title}</H1>
          <P>{header.content}</P>
        </header>
      </FlexCol>
      {details.map((detail, index) => {
        const Icon = detail.icon
        return (
          <FlexCol mobile={{width: 4}} desktop={{width: 4}}>
            <aside>
              {detail.icon  && <Icon animated />}
              <H3>{detail.header}</H3>
              <P>{detail.content}</P>
            </aside>
          </FlexCol>
        )
      })}
      <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
        <footer>
          <Link href={footer.link.href}>{footer.link.text}</Link>
        </footer>
      </FlexCol>
    </section>
  )
})`
  ${FlexRow}
  background-color: ${props => props.theme.colors.lightBlue[0]};
  ${H1} {
    margin: 0 0 4rem;
    ${props => props.theme.media.tablet`
      margin: 0 0 6rem;
    `}
  }
  * {
    text-align: center;
  }
  > header, footer {
    flex: 1 1 100%;
    margin-top: 4rem;
    margin-bottom: 4rem;
    ${props => props.theme.media.tablet`
      margin-top: 6rem;
      margin-bottom: 6rem;
    `}
  }
  > aside {
    margin: 0 0 4rem;
    ${props => props.theme.media.tablet`
      margin: 0 0 6rem;
    `}
    svg {
      max-height: 8rem;
    }
  }
`

SubscriptionSection.propTypes = {
  children: PropTypes.object
}

SubscriptionSection.defaultProps = {...defaultProps}

/** @component */
export default SubscriptionSection
