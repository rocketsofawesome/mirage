export const spacers = {
  none: 0,
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem'
}

export const spaceFromProp = (propName) => (props) => {
  const propValue = props[propName]
  return spacers[propValue]
}
