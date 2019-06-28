import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseQuickAddSize from './quickAddSize.base'

const QuickAddSize = styled(BaseQuickAddSize)`
  position: relative;
  input {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
  }
  input:checked + label {
    background-color: ${props => props.theme.colors.navy};
    color: ${props => props.theme.colors.white};
    text-decoration: none;
    &:hover {
      background-color: ${props => props.theme.colors.navy};
      color: ${props => props.theme.colors.white};
      text-decoration: none;
    }
  }

  input:disabled + label {
    color: ${props => props.theme.colors.loading};
    &:hover {
      color: ${props => props.theme.colors.loading};
      background-color: transparent;
      cursor: not-allowed;
    }
  }

  label {
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.4rem;
    border-radius: 1.5rem;
    color: $navy-blue;
    height: 2.8rem;
    line-height: 2.8rem;
    margin: 0.6rem;
    padding: 0 0.6rem;
    min-width: 2.8rem;
    width: auto;
    text-decoration: none;

    &:hover {
      background-color: ${props => props.theme.colors.rocketBlue};
      color: ${props => props.theme.colors.white};
      cursor: pointer;
      text-decoration: none;
    }
  }
`

QuickAddSize.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      loading: PropTypes.string,
      navy: PropTypes.string,
      white: PropTypes.string
    }),
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  })
}

/** @component */
export default QuickAddSize
