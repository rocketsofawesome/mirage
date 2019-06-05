import React from 'react'
import styled from 'styled-components'

import { FlexCol, Input, YellowButton } from 'SRC'

class BaseEmailCaptureForm extends React.Component {
  render () {
    const { className, onEmailSubmit } = this.props

    return (
      <div className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 6, span: 3}}>
          <form onSubmit={onEmailSubmit}>
            <Input style={{ marginBottom: '1rem' }} label={'enter your email'} />
            <YellowButton style={{ transform: 'none' }} type='submit' width='242px'>
              Sign Up
            </YellowButton>
          </form>
        </FlexCol>
      </div>
    )
  }
}

const EmailCaptureForm = styled(BaseEmailCaptureForm)`
  display: flex;

  ${FlexCol} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 5.5rem;
  }
`

export default EmailCaptureForm
