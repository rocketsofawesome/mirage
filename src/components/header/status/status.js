import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pStyle } from 'SRC/core/typography/P'
import { FlexCol, FlexRow } from 'SRC'

const message = css`
  background-color: ${props => props.theme.colors.rocketBlue};
  color: ${props => props.theme.colors.white};
`

const notification = css`
  background-color: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.navy};
`

const error = css`
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  font-style: italic;
`

const promo = css`
background-color: ${props => props.theme.colors.lightBlue[0]};
color: ${props => props.theme.colors.rocketBlue};
font-style: italic;
`

const setTypeStyle = ({type}) => {
  const types = {
    'error': error,
    'message': message,
    'notification': notification,
    'promo': promo
  }

  return types[type]
}

const Status = styled(({className, children, dismissable}) => {
  return (
    <div className={className}>
      <FlexRow>
          <FlexCol
            className='container'
            mobile={{width: 4}}
            desktop={{width: 10, span: 1}}>
            {children}
          </FlexCol>
      </FlexRow>
    </div>
  )
})`
  .container {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    ${pStyle}
    font-size: ${props => props.fontSize};
  }
  ${props => setTypeStyle(props)}
`

const statusTypeCheck = (props, propName, componentName) => {
  const types = ['message', 'promo', 'notification', 'error']
  if (!types.includes(props[propName])){
    return new Error(`Invalid type prop supplied for ${componentName} please choose one of the following: ${types.toString()}`)
  }
}

Status.propTypes = {
  type: statusTypeCheck,
  dismissable: PropTypes.bool
}

Status.defaultProps = {
  type: 'notification',
  fontSize: '1.6rem'
}

/** @component */
export default Status
