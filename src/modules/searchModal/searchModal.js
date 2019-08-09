import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import cloudinary from 'SRC/services/cloudinary'

const SearchDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const SearchBarDiv = styled.div`
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  height: 326px;
  width: 100%;
  background-color: #FFFFFF;
  overflow: hidden;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    height: 336px;
  `}
`

const SearchModalDiv = styled.div`
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(216, 216, 216, 0.7);
`

const SearchOverlayImage = styled.img`
  margin: 17px auto 0 auto;
  display: block;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    margin: 30px auto 0 auto;
  `}
`

const SearchExitWrapperDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 37px;
  height: 37px;
  position: absolute;
  top: 0;
  right: 0;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    top: 53px;
    right: calc(50% - 300px - 10%);
  `}

  > svg {
    position: absolute;
    bottom: 0;
    left: 0;

    ${props => props.theme.breakpointsVerbose.aboveDesktop`
      top: 10px;
      left: 10px;
    `}
  }
`

const SearchSuggestionsDiv = styled.div`
  height: 42px;
  width: 265px;
  margin: auto;
  margin-top: 5px;
  font-family: ff-din-web,Helvetica,Arial,sans-serif;
  font-size: 16px;
  text-align: center;
  color: #00003C;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    height: 21px;
    width: 565px;
    margin-top: 15px;
  `}
`

const SearchForm = styled.form`
  margin: auto;
  margin-top: 75px;
  width: 280px;
  height: 37px;
  border-bottom: 1px solid #0073D1;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    margin-top: 90px;
    width: 600px;
    height: 37px;
  `}
`

const SearchClearWrapperDiv = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 26px;
  width: 26px;

  > svg {
    margin-left: 10px;

    ${props => props.theme.breakpointsVerbose.aboveDesktop`
      margin-bottom: 10px;
    `}
  }
`

const SearchInput = styled.input`
  width: 250px;
  height: 36px;
  border: 0;
  outline: none;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 26px;
  font-weight: 500;
  color: #00003C;
  display: inline-block;
  padding: 0;
  margin: 0;

  ${props => props.theme.breakpointsVerbose.aboveDesktop`
    width: 570px;
    height: 34px;
  `}
`

class BaseSearchModal extends React.Component {
  constructor (props) {
    super(props)

    this.state = { searchTerm: props.initialSearchTerm || '' }

    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.clearSearchInput = this.clearSearchInput.bind(this)
    this.keyDownSearchInput = this.keyDownSearchInput.bind(this)
    this.submitSearch = this.submitSearch.bind(this)
  }

  updateSearchTerm = (event) => {
    const { saveInitialSearchTerm } = this.props

    const currentSearchTerm = event.target.value

    this.setState({ searchTerm: currentSearchTerm })
    saveInitialSearchTerm(currentSearchTerm)
  }

  clearSearchInput = () => {
    this.setState({ searchTerm: '' })

    const searchInput = document.getElementById('input-search');
    searchInput.focus()
  }

  // Escape key exits search
  keyDownSearchInput = (event) => {
    const { exitSearch } = this.props

    if (event.keyCode === 27) { exitSearch() }
  }

  submitSearch = (event) => {
    event.preventDefault()

    const { exitSearch, submitSearch } = this.props
    const { searchTerm } = this.state

    if (searchTerm.length > 0) {
      submitSearch(searchTerm)
      exitSearch()
    }
  }

  render () {
    const { exitSearch } = this.props
    const { searchTerm } = this.state

    const searchOverlayImageSrc = cloudinary.url('web/search/SearchOverlayDesktop')

    return (
      <SearchDiv>
        <SearchBarDiv>
          <SearchForm role='search' onSubmit={this.submitSearch}>
            <SearchInput
              id='input-search'
              value={searchTerm}
              onChange={this.updateSearchTerm}
              onKeyDown={this.keyDownSearchInput}
              autoFocus />
            <SearchClearWrapperDiv onClick={this.clearSearchInput}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <g fill="none" fillRule="evenodd">
                  <circle cx="7" cy="7" r="7" fill="#DCD6CE" />
                  <path stroke="#FFF" strokeLinecap="square" strokeWidth="2" d="M9.898 4.142l-5.796 6.216M4.102 4.142l5.796 6.216" />
                </g>
              </svg>
            </SearchClearWrapperDiv>
          </SearchForm>

          <SearchSuggestionsDiv>Find it fast! Try: rainbow, stripe, neon, sequin, comfy…</SearchSuggestionsDiv>
          <SearchExitWrapperDiv onClick={() => exitSearch()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
              <g fill="none" fillRule="evenodd" stroke="#0073D1">
                <path d="M1.37 1.841a.442.442 0 0 0-.002.628l12.69 12.69a.439.439 0 0 0 .628 0 .442.442 0 0 0 .001-.628L1.997 1.84a.439.439 0 0 0-.628 0z" />
                <path d="M1.37 15.159a.442.442 0 0 0 .627 0l12.69-12.69a.439.439 0 0 0 0-.628.442.442 0 0 0-.628 0L1.369 14.53a.439.439 0 0 0 0 .628z" />
              </g>
            </svg>
          </SearchExitWrapperDiv>

          <SearchOverlayImage src={searchOverlayImageSrc} />
        </SearchBarDiv>
        <SearchModalDiv onClick={() => exitSearch()} />
      </SearchDiv>
    )
  }
}

BaseSearchModal.propTypes = {
  initialSearchTerm: PropTypes.string,
  saveInitialSearchTerm: PropTypes.func,
  exitSearch: PropTypes.func,
  submitSearch: PropTypes.func
}

const SearchModal = styled(BaseSearchModal)``

export default SearchModal
