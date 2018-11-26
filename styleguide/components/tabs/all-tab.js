import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Tab from './tab.base'

const UnstyledTab = (props) => {
  return (<Tab>All</Tab>)
}

const AllTab = styled(UnstyledTab)`

`

AllTab.propTypes = {

}

/** @component */
export default AllTab
