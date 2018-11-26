import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AllTab from './all-tab'

const UnstyledTabs = (props) => {
  return(
    <ul>
      <AllTab />
    </ul>
  )
}

const Tabs = styled.ul`

`

Tabs.propTypes = {

}

/** @component */
export default Tabs
