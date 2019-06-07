import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H4 } from 'SRC'

import { MegaMenuLink } from 'SRC'

class BaseMegaMenuSection extends React.Component {

  render () {
    const {className, section, renderLink, ...props} = this.props
    if (section) {
      return (
        <ol className={className} key={section.id} id={section.id}>
          {
            (section.title && section.title !== '') &&
            <H4 italic={false}>{section.title}</H4>
          }
          {section.links.map((link, id) => {
            return (
              <li key={`${section}-${id}`}>
                <MegaMenuLink
                  link={link}
                  renderLink={renderLink}
                  id={`${section}-${id}`}
                  {...props} />
              </li>
            )
          })}
        </ol>
      )
    } else { return null }
  }
}

const MegaMenuSection = styled(BaseMegaMenuSection)`
  padding-left: 0;
  ${H4} {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  > li {
    list-style: none;
  }
`

MegaMenuSection.propTypes = {
  className: PropTypes.string,
  clearMenuImage: PropTypes.func.isRequired,
  section: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.array
  }).isRequired,
  setMenuImage: PropTypes.func.isRequired,
  rednerLink: PropTypes.func
}

/** @component */
export default MegaMenuSection
