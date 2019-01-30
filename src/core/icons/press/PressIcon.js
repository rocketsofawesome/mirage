import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Default from './Default.base'
import FastCompany from './FastCompany.base'
import LATimes from './LATimes.base'
import NewYorkTimes from './NewYorkTimes.base'
import NewYorkPost from './NewYorkPost.base'
import ParentsMagazine from './ParentsMagazine.base'
import PeopleMagazine from './PeopleMagazine.base'
import TechCrunch from './TechCrunch.base'
import TodayShow from './TodayShow.base'

const PressIconBase = ({ brand, className, ...props }) => {
  let Child = null
  switch (brand) {
    case 'fast_company':
      Child = FastCompany
      break
    case 'la_times':
      Child = LATimes
      break
    case 'new_york_times':
      Child = NewYorkTimes
      break
    case 'new_york_post':
      Child = NewYorkPost
      break
    case 'parents_magazine':
      Child = ParentsMagazine
      break
    case 'people_magazine':
      Child = PeopleMagazine
      break
    case 'tech_crunch':
      Child = TechCrunch
      break
    case 'today_show':
      Child = TodayShow
      break
    default:
      Child = Default
  }
  return (
    <Child className={className} onClick={props.onClick} />
  )
}

export const defaultStyle = css`
  fill: ${props => props.theme.colors.navy};
`

export const selected = css`
  fill: ${props => props.theme.colors.rocketBlueHover};
`

const colorPressIcon = css`
  ${props => !props.selected && defaultStyle}
  ${props => props.selected && selected}
`

const PressIcon = styled(PressIconBase)`
  ${props => colorPressIcon}
`

PressIcon.propTypes = {
  brand: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }),
  onClick: PropTypes.func
}

/** @component */
export default PressIcon
export { PressIconBase }
