import React from 'react';
import styled, { css } from 'styled-components';

import { TransparentCircleChevron } from 'SRC';

const arrowStyles = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;

  svg {
    width: 24px;
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      width: 40px;
    `}
  }
`

const BaseLeftArrow = ({ onClick, className }) => (
  <a onClick={onClick} className={className}>
    <TransparentCircleChevron left />
  </a>
)
export const LeftArrow = styled(BaseLeftArrow)`
  ${arrowStyles}
  left: 8px;

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    left: 10px;
  `}
`
const BaseRightArrow = ({ onClick, className }) => (
  <a onClick={onClick} className={className}>
    <TransparentCircleChevron right />
  </a>
)
export const RightArrow = styled(BaseRightArrow)`
  ${arrowStyles}
  right: 8px;

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    right: 10px;
  `}
`
