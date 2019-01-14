import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withSize } from 'react-sizeme'

const StyledBackgroundImage = styled.section`
  position: relative;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: ${props => props.defaultPaddingTop}%;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

class BackgroundImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSrc: props.src,
      defaultPaddingTop: 0
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
        const image = new Image();
        image.src = newSrc
        image.onload = () => {
          const defaultPaddingTop = (image.height !== 0 && image.width !== 0)
          ? ((image.height / image.width) * 100)
          : 0
          console.log(image.src, image.height, image.width, defaultPaddingTop)
          this.setState({
            currentSrc: newSrc,
            defaultPaddingTop: defaultPaddingTop
          })
        }
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
    const { children, ...props } = this.props
    const { currentSrc, defaultPaddingTop } = this.state
      console.log('currentSrc', currentSrc)
      return (
        <StyledBackgroundImage {...this.props} src={currentSrc} defaultPaddingTop={defaultPaddingTop}>
          <div>{children}</div>
        </StyledBackgroundImage>)
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
