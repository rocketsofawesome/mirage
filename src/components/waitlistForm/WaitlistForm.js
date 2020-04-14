import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { P, Button, InputSmall, XCheckbox } from 'SRC'

const Text = styled(P)`
  font-weight: 500;
  margin-bottom: 10px;
`

const Container = styled.div`
  margin-bottom: 15px;
`

const InputContainer = styled.div`
  margin-bottom: 16px;
`

const CheckboxContainer = styled.div`
  margin-bottom: 21px;
`

const Envelope = () => (
  <svg
    width="23px"
    height="16px"
    viewBox="0 0 23 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Waitlist" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Desktop---not-logged-in-confirmation" transform="translate(-925.000000, -549.000000)" stroke="#FFFFFF">
        <g id="Email" transform="translate(926.000000, 550.000000)">
          <polygon id="Path-3" points="0 0 21 0 21 14 0 14"></polygon>
          <polyline id="Path-4" strokeLinecap="round" strokeLinejoin="round" points="0 0 10.5019918 9.33333333 21 0"></polyline>
        </g>
      </g>
    </g>
  </svg>
)

const StyledEnvelope = styled(Envelope)`
  margin-right: 5px;
`

const WaitlistForm = ({
  email,
  updateEmail,
  onSubmit,
  onCheckboxChange,
  checked,
  errorMessage,
  user,
  submitted
}) => {
  if (submitted) {
    return (
      <Container>
        <Button disabled width='100%'>
          <StyledEnvelope /> YAY! YOU'RE SIGNED UP
        </Button>
      </Container>
    )
  }

  return (
    <Container>
      <Text>
        SOLD OUT - notify me when it’s back
      </Text>
      <form onSubmit={onSubmit} >
        <InputContainer>
          <InputSmall
            type="text"
            name="email"
            value={email}
            onChange={updateEmail}
            placeholder='ENTER EMAIL'
            errorMessage={errorMessage}
          />
        </InputContainer>
        {!user &&
          <CheckboxContainer>
            <XCheckbox
              width='1.8rem'
              onChange={onCheckboxChange}
              checked={checked}
              label='Send me news + updates!'
            />
          </CheckboxContainer>
        }
        <Button
          aria-label='NOTIFY ME'
          width='100%'
        >
          NOTIFY ME
        </Button>
      </form>
    </Container>
  )
}

WaitlistForm.propTypes = {
  email: PropTypes.string,
  updateEmail: PropTypes.func,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
  checked: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
  errorMessage: PropTypes.string
}

/** @component */
export default WaitlistForm
