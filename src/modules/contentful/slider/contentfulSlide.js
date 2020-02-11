import React from 'react';
import PropTypes from 'prop-types';

import { ContentfulResponsiveImages } from 'SRC';

const ContentfulSlide = ({ fields }) => (
  <ContentfulResponsiveImages {...fields.image} />
)

ContentfulSlide.propTypes = {
  fields: PropTypes.object.isRequired
}

export default ContentfulSlide;
