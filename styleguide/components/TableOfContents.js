import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { WhiteLink } from 'SRC/components/link'
import ComponentsList from 'react-styleguidist/lib/rsg-components/ComponentsList'
import TableOfContentsRenderer from 'react-styleguidist/lib/rsg-components/TableOfContents/TableOfContentsRenderer'
import filterSectionsByName from 'react-styleguidist/lib/utils/filterSectionsByName'


class UnstyledTableOfContents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      sectionSelected: 0
    }
    this.sectionsList = null
  }

  setSectionsList = (element) => {
    this.sectionsList = element
  }

  selectSection = ({ currentTarget }) => {
    const sectionId = currentTarget.getAttribute('data-section')
    this.setState({
      sectionSelected: parseInt(sectionId, 10)
    })
  }

  renderLevel(
    sections,
    useRouterLinks = false,
    hashPath = [],
    useHashId = false
  ) {
    const items = sections.map(section => {
      const children = [
        ...(section.sections || []),
        ...(section.components || [])
      ]
      const sectionDepth = section.sectionDepth || 0
      const childHashPath =
        sectionDepth === 0 && useHashId ? hashPath : [...hashPath, section.name]
      return Object.assign({}, section, {
        heading: !!section.name && children.length > 0,
        content:
        children.length > 0 &&
        this.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0),
      })
    })
    return (
      <ComponentsList
        items={items}
        hashPath={hashPath}
        useHashId={useHashId}
        useRouterLinks={useRouterLinks}
      />
    )
  }

  buildSections(inSections) {
    const all = {
      ...inSections[0],
      name: 'ALL',
      slug: 'all',
      visibleName: 'ALL',
      components: inSections.reduce((components, currentValue) => {
        return [...components, ...currentValue.components]
      })
    }
    return [
      all,
      ...inSections
    ]
  }

  renderSections() {
    const { searchTerm, sectionSelected } = this.state
    const { sections: inSections, useRouterLinks } = this.props
    const unfilteredSections = this.buildSections(inSections)

    // If there is only one section, we treat it as a root section
    // In this case the name of the section won't be rendered and it won't get left padding
    // const section = unfilteredSections.length === 1 ? unfilteredSections[0].components : unfilteredSections;
    const filtered = filterSectionsByName(unfilteredSections[sectionSelected].components, searchTerm)
    return this.renderLevel(filtered, useRouterLinks)
  }

  render () {
    const  { searchTerm, sectionSelected } = this.state
    const { className, sections: inSections } = this.props
    const sections = this.buildSections(inSections)
    const tableBackgroundClass = sections[sectionSelected].slug
    return (
      <section className={className} >
        <aside>
          <ul ref={element => this.setSectionsList}>
            {sections.map((section, id) => {
              return (
                <li
                  className={section.name.toLowerCase()}
                  data-section={id}
                  onClick={this.selectSection}
                  key={section.name}>
                  <WhiteLink href={`#${section.slug}`}>{section.name}</WhiteLink>
                </li>
              )
            })}
          </ul>
        </aside>
        <main className={tableBackgroundClass}>
          <TableOfContentsRenderer
          searchTerm={searchTerm}
          onSearchTermChange={searchTerm => this.setState({ searchTerm })} >
            {this.renderSections()}
          </TableOfContentsRenderer>
        </main>
      </section>
    )
  }
}

const verticalTabContainer = css`
top: 0;
left: 0;
position: absolute;
transform: rotate(-90deg) translateX(-100%);
transform-origin: left top 0;
overflow-x: auto;
`

const verticalTabs = css`
margin-top: 2rem;
flex-direction: row-reverse;
align-items: center;
flex-wrap: nowrap;
`

const desktopListing = css`
  margin-left: 6rem;
  border-bottom-left-radius: 0.5rem;
`

const TableOfContents = styled(UnstyledTableOfContents)`
  display: flex;
  position: relative;
  background-color: #333;
  min-height: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  > aside {
    display: flex;
    flex: 0 0 100%;
    flex-wrap: wrap;
    overflow-x: scroll;
    ${props => props.theme.media.tablet`${verticalTabContainer}`}
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      min-height: 4rem;
      display: flex;
      ${props => props.theme.media.tablet`${verticalTabs}`}
      li {
        display: inline-block;
        height: 100%;
        flex: 1 1 auto;
        display: flex;
        padding: 0 2rem;
        margin-right: 0.3rem;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        box-shadow: 0.2rem 0 0.3rem rgba(0,0,0, 0.4);
        transition: background-color 0.25s ease-in-out;
        &:hover, > *:hover {
          cursor: pointer;
        }
        &:first-of-type {
          ${props => props.theme.media.tablet`margin-right: 0;`}
        }
        &.all {
          box-shadow: none;
          &:hover {
            background-color: #274560;
          }
        }
        &.core:hover {
            background-color: #281C38;
          }
        }
        .modules:hover {
            background-color: #A33B37;
          }
        }
        .components:hover {
            background-color: #C65645;
          }
        }
        .templates:hover {
            background-color: #2C725D;
          }
        }
        .pages:hover {
            background-color: #212187;
          }
        }
      }
    }
  }
  > main {
    flex: 1 1 auto;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    transition: background-color 0.25s ease-in-out;
    box-shadow: inset -10px 0 5px -5px rgba(0,0,0,0.3);
    ${props => props.theme.media.tablet`${desktopListing}`}
  }
  .all {
    background-color: #3E6D99;
  }
  .core {
    background-color: #533A71;
  }
  .modules {
    background-color: #DB504A;
  }
  .components {
    background-color: #FF6F59;
  }
  .templates {
    background-color: #43AA8B;
  }
  .pages {
    background-color: #2F30BE;
  }
`

TableOfContents.propTypes = {
  theme: PropTypes.shape({
    media: PropTypes.shape({
      tablet: PropTypes.func
    })
  })
}

/** @component */
export default TableOfContents
