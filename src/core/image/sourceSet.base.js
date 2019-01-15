export default class SourceSet {
  constructor (sources) {
    this.sources = sources
  }
  toString = () => {
    let output = ``
    for (let width in this.sources) {
      output = `${output}${this.sources[width]} ${width},
`
    }
    return output.slice(0, -2)
  }
}
