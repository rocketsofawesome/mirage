import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'

import Sizes from './sizes.base'
import SourceSet from './sourceSet.base'

const StyledBackgroundImage = styled.section`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: ${props => props.defaultPaddingTop}%;
`

class BackgroundImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      currentSrc: props.src
    }
  }

  setResponsiveBackground = () => {
    const { size: { width }, sources } = this.props
    const { currentSrc } = this.state
    if (sources) {
      const newSrc = sources[Object.keys(sources)
      .sort((keyA, keyB) => keyA-keyB)
      .reverse()
      .find((key) => {
        return(key < width)
      })]
      if(currentSrc !== newSrc) {
        this.setState({ currentSrc: newSrc})
      }
    }
  }

  componentDidMount () {
    this.setResponsiveBackground()
  }

  componentDidUpdate() {
    this.setResponsiveBackground()
  }

  render() {
    const { currentSrc } = this.state
    const image = new Image();
    image.src = currentSrc

    const defaultPaddingTop = (image.height !== 0 && image.width !== 0)
    ? ((image.height / image.width) * 100)
    : 0
    return (<StyledBackgroundImage {...this.props} src={image.src} defaultPaddingTop={defaultPaddingTop} />)
  }
}

BackgroundImage.propTypes = {
  src: PropTypes.string,
  sizes: PropTypes.object,
  srcSet: PropTypes.oneOfType([
    (props, propName, componentName) => {
      if (props[propName] && !props['sizes']) {
        console.warn(
          `You have provided ${propName}, but not defined the sizes prop, this will cause your InlineImages for be sized to 100vw if a \`width\` css property is not set.`
        )
      }
    },
    PropTypes.object
  ])
}

/** @component */
export default  withSize()(BackgroundImage)
