import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ContentfulResponsiveImages, ContentfulButton } from 'SRC';

const Container = styled.div`
  position: relative;
`

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    padding-bottom; 0;
  `}
`

const ContentfulSlide = ({ fields, segmentHeroClicked, position, totalSlides }) => {
  const buttons = fields.buttons || []

  let image = <ContentfulResponsiveImages {...fields.image} />
  if (fields.url) {
    const triggerSegmentHeroClicked = () => {
      // Asset (image URL), destination, name, and position
      if (fields.image && fields.image.fields && fields.image.fields.defaultImage) {
        const assetUrl = `https:${fields.image.fields.defaultImage.fields.file.url}`
        segmentHeroClicked(assetUrl, fields.url, fields.image.fields.title, position, totalSlides)
      }
    }

    image = <a href={fields.url} onClick={triggerSegmentHeroClicked}>{image}</a>
  }

  return (
    <Container>
      {image}
      <ButtonContainer>
        {buttons.map(button => <ContentfulButton {...button} />)}
      </ButtonContainer>
    </Container>
  )
}

ContentfulSlide.propTypes = {
  fields: PropTypes.object.isRequired,
  segmentHeroClicked: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired
}

export default ContentfulSlide
