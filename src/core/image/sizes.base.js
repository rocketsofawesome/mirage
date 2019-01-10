export default class Sizes {
  constructor(inSizes) {
    this.sizes = inSizes
  }
  toString = () => {
    let output = ``
    for (let breakpoint in this.sizes) {
      const width = this.sizes[breakpoint]
      if (breakpoint !== 'default') {
        output = `${output}${breakpoint} ${width},`
      } else {
        output = `${output} ${width},`
      }

    }
    return output.slice(0, -1)
  }
}
