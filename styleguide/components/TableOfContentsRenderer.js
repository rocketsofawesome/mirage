import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from 'SRC/core/theme'
import Label from 'SRC/core/typography/Label'

class UnstyledTableOfContentsRenderer extends React.Component {
  render () {
    console.log(theme)
    const { className, children, searchTerm, onSearchTermChange } = this.props
    console.log(this.props)
    return (
      <section className={className}>
        <aside>
          <ul>
            <li className='pages'><Label>Pages</Label></li>
            <li className='templates'><Label>Templates</Label></li>
            <li className='components'><Label>Components</Label></li>
            <li className='modules'><Label>Modules</Label></li>
            <li className='core'><Label>Core</Label></li>
            <li className='all'><Label>All</Label></li>
          </ul>
        </aside>
        <main>
          <input
            value={searchTerm}
            placeholder="Filter by name"
            aria-label="Filter by name"
            onChange={event => onSearchTermChange(event.target.value)}
          />
          <nav>{children}</nav>
        </main>
      </section>
    )
  }
}

const TableOfContentsRenderer = styled(UnstyledTableOfContentsRenderer)`
  display: flex;
  position: relative;
  background-color: #333;
  height: 100%;
  > aside {
    top: 0;
    left: 0;
    position: absolute;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: left top 0;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      height: 4rem;
      margin-top: 2rem;
      display: flex;
      align-items: center;
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
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
  > main {
    flex: 1 1 auto;
    margin-left: 6rem;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #CCC;
    border-bottom-left-radius: 0.5rem;
    box-shadow: inset -10px 0 5px -5px rgba(0,0,0,0.3);
    input {
      height: 4rem;
      width: 100%;
      box-sizing: border-box;
    }
    ul {
      padding: 0;
    }
  }
  .all {
    background-color: #3E6D99;
    box-shadow: none;
    &:hover {
      background-color: #274560;
    }
  }
  .core {
    background-color: #533A71;
    box-shadow: none;
    &:hover {
      background-color: #281C38;
    }
  }
  .modules {
    background-color: #DB504A;
    &:hover {
      background-color: #A33B37;
    }
  }
  .components {
    background-color: #FF6F59;
    &:hover {
      background-color: #C65645;
    }
  }
  .templates {
    background-color: #43AA8B;
    &:hover {
      background-color: #2C725D;
    }
  }
  .pages {
    background-color: #2F30BE;
    &:hover {
      background-color: #212187;
    }
  }
  ${Label} {
    color: ${props => props.theme.colors.white};
  }
`

TableOfContentsRenderer.propTypes = {

}

/** @component */
export default TableOfContentsRenderer
