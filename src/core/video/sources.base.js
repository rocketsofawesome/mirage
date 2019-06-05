import React from 'react'

export default class Sources {
  constructor(inSources) {
    this.sources = inSources
  }

  createSourceElement = (source, key = 0) => {
    if (typeof source === 'string') {
      const acceptedFormats = ['webm', 'ogv', 'mp4', 'flv']
      const test = /\.([0-9a-z]{1,5})$/
      const result = test.exec(source)
      let format = result[1]
      if (!acceptedFormats.includes(format)) {
        console.warn(`An invalid file extension was provided for ${source}`)
      }
      if (format === 'ogv') {
        format = 'ogg'
      }
      return <source src={source} type={`video/${format}`} key={key} />
    } else {
      console.warn(`A string was not provided as a source for ${source}`)
    }
  }

  render = () => {
    let output = []
    if (Array.isArray(this.sources)){
      output = this.sources.map((source, index) => {
        return this.createSourceElement(source, index)
      })
    } else {
      output = [this.createSourceElement(this.sources, )]
    }
    return output
  }
}
