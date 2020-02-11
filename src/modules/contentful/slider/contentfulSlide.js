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

const ContentfulSlide = ({ fields }) => {
  const buttons = fields.buttons || [];
  return (
    <Container>
      <ContentfulResponsiveImages {...fields.image} />
      <ButtonContainer>
        {buttons.map(button => <ContentfulButton {...button} />)}
      </ButtonContainer>
    </Container>
  )
}


ContentfulSlide.propTypes = {
  fields: PropTypes.object.isRequired
}

export default ContentfulSlide;
