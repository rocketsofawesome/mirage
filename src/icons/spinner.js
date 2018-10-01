import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

const animation = keyframes`
0% {
  opacity: 1.0;
}
100% {
  opacity: 0.0;
}
`

const fills = {
  blue: css`
    fill: ${props => props.theme.colors.rocketBlue};
  `,
  navy: css`
    fill: ${props => props.theme.colors.navy};
  `,
  gray: css`
    fill: ${props => props.theme.colors.gray[4]};
  `,
  white: css`
    fill: ${props => props.theme.colors.white};
  `
}

const StyledSpinner = styled.svg`
  width: ${props => props.size};
  height: ${props => props.size};
  -webkit-transform-style: preserve-3d !important;
  rect {
    animation-name: ${animation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    transform-origin: center;
    ${props => props.fill ? fills[props.fill] : fills.blue}

    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.0799999999999998s;
    }
    &:nth-child(2) {
      transform: rotate(36deg);
      animation-delay: -0.96s;
    }
    &:nth-child(3) {
      transform: rotate(72deg);
      animation-delay: -0.8400000000000001s;
    }
    &:nth-child(4) {
      transform: rotate(108deg);
      animation-delay: -0.72s;
    }
    &:nth-child(5) {
      transform: rotate(144deg);
      animation-delay: -0.6s;
    }
    &:nth-child(6) {
      transform: rotate(180deg);
      animation-delay: -0.48s;
    }
    &:nth-child(7) {
      transform: rotate(216deg);
      animation-delay: -0.36s;
    }
    &:nth-child(8) {
      transform: rotate(252deg);
      animation-delay: -0.24s;
    }
    &:nth-child(9) {
      transform: rotate(288deg);
      animation-delay: -0.12s;
    }
    &:nth-child(10) {
      transform: rotate(324deg);
      animation-delay: 0s;
    }
  }
`

const Spinner = (props) => {
  return (
    <StyledSpinner viewBox='0 0 100 100' {...props} preserveAspectRatio='xMidYMid'>
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
    </StyledSpinner>
  )
}

Spinner.propTypes = {
  fill: PropTypes.oneOf(['blue', 'navy', 'gray', 'white']),
  size: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      navy: PropTypes.string,
      white: PropTypes.string,
      gray: PropTypes.array
    })
  })
}

Spinner.defaultProps = {
  size: '80px'
}

/** @component */
export default styled(Spinner)``

// Wrapping the component in a styled tag so that we can refference it in other
// other styled components. See:
// https://www.styled-components.com/docs/advanced#caveat
