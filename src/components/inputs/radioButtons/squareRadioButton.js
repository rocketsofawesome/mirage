import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

const SquareRadioButton = styled(({className, children, selected, input, inStock}) => {
  const classes = classNames(className, {
    selected: selected,
    outOfStock: !inStock
  })
  return (
    <label className={classes}>
      {children}
      <input type='radio' {...input} />
    </label>
  )
})` box-sizing: border-box;
    width: 6rem;
    height: 4.7rem;
    border-radius: 0.2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0;
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: 1.4rem;
    font-weight: 200;
    cursor: pointer;
    color: ${props => props.theme.colors.navyBlue};
    border: solid 0.1rem ${props => props.theme.colors.rocketBlue};
    position: relative;
    &:hover {
      background-color: ${props => props.theme.colors.lightBlue[1]};
    }
  > input {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }
  &.outOfStock {
    border: solid 0.1rem ${props => props.theme.colors.shadyLady};
    color: ${props => props.theme.colors.shadyLady};
    &:hover {
      background-color: transparent;
      cursor: not-allowed;
    }
  }
  &.selected {
    background-color: ${props => props.theme.colors.lightBlue[1]};
  }
`

SquareRadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  input: PropTypes.object,
  inStock: PropTypes.bool,
  selected: PropTypes.bool
}

/** @component */
export default SquareRadioButton