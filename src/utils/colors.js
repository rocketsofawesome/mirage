const colorFromProp = (propName) => (props) => {
  const propValue = props[propName]
  return props.theme.colors[propValue] || propValue
}

export default colorFromProp
