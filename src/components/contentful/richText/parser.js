import React from 'react'

import * as typography from 'SRC/core/typography'

export default class Content {
  constructor (richText) {
    this.richText = richText
  }
  parse = (element = this.richText) => {
    let component = null
    if (element) {
      switch (element.nodeType) {
        case 'asset-hyperlink':
        break;
        case 'blockquote':
        break;
        case 'document':
         component = 'article'
        break;
        case 'embedded-asset-block':
        break;
        case 'embedded-entry-block':
        break;
        case 'embedded-entry-inline':
        break;
        case 'entry-hyperlink':
        break;
        case 'heading-1':
          component = typography.H1
        break;
        case 'heading-2':
          component = typography.H2
        break;
        case 'heading-3':
          component = typography.H3
        break;
        case 'heading-4':
          component = typography.H4
        break;
        case 'heading-5':
        break;
        case 'heading-6':
        break;
        case 'hr':
          component = typography.Hr
        break;
        case 'hyperlink':
        break;
        case 'list-item':
        break;
        case 'ordered-list':
        break;
        case 'paragraph':
          component = typography.P
        break;
        case 'unordered-list':
        break;
        default:
          if (element.value && element.value !== '') {
            component = element.value
          }
        break;
      }
      if (element.content && component !== null){
        const Component = component
        return (
          <Component>
            {element.content.map((child) => {
              return this.parse(child)
            })}
          </Component>
        )
      } else {
        return component
      }
    } else {
      return component
    }
  }
}
