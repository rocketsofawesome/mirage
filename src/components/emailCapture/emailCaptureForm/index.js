import React from 'react'
import styled from 'styled-components'

import { FlexCol, Input, YellowButton } from 'SRC'

class BaseEmailCaptureForm extends React.Component {
  render () {
    const { className, onEmailSubmit, errorMessage } = this.props

    return (
      <div className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 6, span: 3}}>
          <form onSubmit={onEmailSubmit}>
            <Input
              label={'ENTER YOUR EMAIL'}
              error={errorMessage}
            />
            <YellowButton style={{ marginTop: '1rem', transform: 'none' }} type='submit' width='242px'>
              Sign Up
            </YellowButton>
          </form>
        </FlexCol>
      </div>
    )
  }
}

BaseEmailCaptureForm.defaultProps = {
  errorMessage: null
}

const EmailCaptureForm = styled(BaseEmailCaptureForm)`
  display: flex;

  ${FlexCol} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
  }
`

export default EmailCaptureForm
