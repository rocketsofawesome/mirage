export default class Sizes {
  constructor(inSizes) {
    this.sizes = inSizes
  }
  toString = () => {
    let output = ``
    for (let breakpoint in this.sizes) {
      const width = this.sizes[breakpoint]
      if (breakpoint !== 'default') {
        output = `${output}${breakpoint} ${width},\n`
      } else {
        output = `${output} ${width}`
      }

    }
    if (Object.keys(this.sizes).includes('default')) {
     return output
   } else {
     return output.slice(0, -2)
   }
  }
}
