import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, WaitlistForm } from 'SRC'

const Container = styled.div`
  margin-bottom: 15px;
`

export const validateEmail = (email) => {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexp.test(email)
}

class AddToBag extends React.Component {
  state = {
    email: '',
    checked: true,
    waitlistSubmitted: false,
    errorMessage: ''
  }

  componentDidMount () {
    this.getEmail()
  }

  componentDidUpdate (prevProps) {
    if (this.props.email !== prevProps.email) {
      this.getEmail()
    }
  }

  submitWaitlistForm = (e) => {
    e.preventDefault()

    const { email, checked } = this.state
    const { sku, orderId, onSubmitWaitlist } = this.props

    if (!validateEmail(email)) {
      this.setState({ errorMessage: 'Enter a valid email address' })
      return
    }

    onSubmitWaitlist({ email, checked, sku, orderId })

    this.setState({
      waitlistSubmitted: true,
      email: '',
      checked: true,
      errorMessage: ''
    })
  }

  getEmail = () => {
    const { email } = this.props
    this.setState({ email })
  }

  updateEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onCheckboxChange = (e) => {
    this.setState({ checked: e.target.checked })
  }

  render () {
    const { inStock, addToBag, isAddingToBag, user } = this.props
    const { email, waitlistSubmitted, checked, errorMessage } = this.state

    if (inStock) {
      return (
        <Container>
          <Button
            aria-label='add to bag'
            width='100%'
            onClick={addToBag}
            loading={isAddingToBag}
          >
            ADD TO BAG
          </Button>
        </Container>
      )
    }

    return (
      <WaitlistForm
        onSubmit={this.submitWaitlistForm}
        updateEmail={this.updateEmail}
        onCheckboxChange={this.onCheckboxChange}
        email={email}
        checked={checked}
        errorMessage={errorMessage}
        user={user}
        submitted={waitlistSubmitted}
      />
    )
  }
}

AddToBag.propTypes = {
  inStock: PropTypes.bool,
  addToBag: PropTypes.func,
  isAddingToBag: PropTypes.bool,
  orderId: PropTypes.number,
  sku: PropTypes.object,
  onSubmitWaitlist: PropTypes.func.isRequired
}

/** @component */
export default AddToBag
