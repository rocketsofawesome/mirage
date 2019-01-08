export default class Sizes {
  constructor(inSizes) {
    this.sizes = inSizes
  }
  toString = () => {
    let output = ``
    for (let breakpoint in this.sizes) {
      output = `${output}${breakpoint} ${this.sizes[breakpoint]},
`
    }
    return output.slice(0, -2)
  }
}
