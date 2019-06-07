import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Highlighter } from 'SRC'

import BaseHeaderLink from './headerLink.base'


/** @component */
const HeaderLink = styled(BaseHeaderLink)`
  position: relative;
  ${props => props.spacing ? `margin: 0 1rem;`: ''}
  display: flex;
  cursor: pointer;
  height: 6rem;
  align-items: center;
  text-decoration: none;
  letter-spacing: 0.1rem
  &:active, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
  > span {
    z-index: 1;
    ${props => props.spacing ? `padding: 0.5rem 1.5rem;`: ''}
  }
  .screenReader{
    font-size: 0;
    height: 0;
  }
  ${Highlighter} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    max-height: 100%;
    max-width: 12rem;
    transform: translateX(-50%) translateY(-50%);
  }
`

HeaderLink.defaultProps = {
  highlightable: true,
  highlightOn: 'hover',
  spacing: true
}

HeaderLink.propTypes = {
  highlightable: PropTypes.bool,
  highlightOn: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

export { BaseHeaderLink }
export default HeaderLink
