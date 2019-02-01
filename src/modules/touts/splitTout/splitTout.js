import React from 'react'
import styled from 'styled-components'

import {default as defaultProps} from './defaultProps.base'
import { BackgroundImage, Markdown, Link } from 'SRC'

const BaseSplitTout = ({className, description, links, ...props}) => {
  return (
    <section className={className} {...props}>
      {links.map((link) => {
        return (
          <Link underline={false} href={link.destination}>
            <BackgroundImage src={link.images[0]} sources={link.images} />
          </Link>
        )
      })}
      <article>
        <Markdown>{description}</Markdown>
        {links.map((link) => {
          return (
            <span className='call-to-action'>
              <Link href={link.destination}>{link.text}</Link>
            </span>
          )
        })}
      </article>
    </section>
  )
}

const SplitTout = styled(BaseSplitTout)`
  box-sizing: border-box;
  border: 1rem solid ${props => props.theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  > ${Link} {
    display: inline-block;
    flex: 1 1 50%;
  }
  > article {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex: 1 1 100%;
    background-color: ${props => props.theme.colors.white};
    > * {
      display: flex;
      justify-content: center;
    }
    > .call-to-action {
      flex: 1 1 50%;
    }
    > :not(.call-to-action) {
      flex: 1 1 100%;
    }
  }
`

SplitTout.propTypes = {

}

SplitTout.defaultProps = defaultProps

/** @component */
export default SplitTout
