import React from 'react'
import PropTypes from 'prop-types'
import { createClient } from 'contentful'

let client

function initContentful () {
  let host = 'cdn.contentful.com'
  if (parseInt(process.env.REACT_APP_CONTENTFUL_PREVIEW, 10) === 1) {
    host = 'preview.contentful.com'
  }
  client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_KEY,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: host
  })
  return client.getSpace()
    .then((space) => {
      return space
    })
}

function getClient () {
  return client
}

export const loadEntry = (query) => {
  return getClient().getEntry(query)
}
export const loadEntries = (query) => {
  if (getClient().getEntries) {
    return getClient().getEntries(query)
  } else {
    return null
  }
}

export { initContentful, getClient }

initContentful()

export default class Contentful extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      response: null
    }
  }
  componentDidMount() {
    const { operation: inOp, id } = this.props
    const client = getClient()
    try {
      const operation = client[inOp]
      operation(id).then((response) => {
        this.setState({response: response})
      })
    } catch (err) {
      console.warn(err)
    }
  }
  render() {
    const { children } = this.props
    const { response } = this.state
    if (response) {
      console.log(response)
      return React.createElement(children.type, {...children.props, ...response,})
    } else {
      return null
    }
  }
}



Contentful.propTypes = {
  operation: PropTypes.string
}
