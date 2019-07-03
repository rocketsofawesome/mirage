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

export const getUrl = (entry) => entry.fields.file.url
export const getAlt = (entry) => entry.fields.description
export const getContentType = (entry) => {
  return entry.sys.contentType.sys.id
}
export const getAssetType = (entry) => /([a-z]*)\//.exec(entry.fields.file.contentType)[1]


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
    const { operation: inOp, id, query } = this.props
    const client = getClient()
    try {
      if (inOp !== 'getEntries') {
        client[inOp](id).then((response) => {
          this.setState({response: response})
        })
      } else {
        client[inOp](query).then((response) => {
          this.setState({response: response.items[0]})
        })
      }
    } catch (err) {
      console.warn(err)
    }
  }
  render() {
    const { children } = this.props
    const { response } = this.state
    console.log(children.props)
    if (response) {
      return React.createElement(children.type, {...children.props, ...response,})
    } else {
      return null
    }
  }
}



Contentful.propTypes = {
  operation: PropTypes.string
}
