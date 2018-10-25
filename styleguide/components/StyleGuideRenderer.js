import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import grid from 'SRC/core/grid/grid'
import ThemeWrapper from 'SRC/core/theme'
import H1 from 'SRC/core/typography/H1'

const UnstyledStyleGuideRenderer = ({
  className,
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}) => {
  return (
    <main className={className}>
      <aside>
        <header><H1>{title}</H1></header>
        { toc }
      </aside>
      <section>
        { children }
      </section>
    </main>
  )
}

const StyleGuideRenderer = styled(UnstyledStyleGuideRenderer)`
  ${grid}
  > aside {
    background-color: ${props => props.theme.colors.gray[0]};
    grid-column: span 3;
    > header {
      padding: 2rem;
      border-bottom: 1px solid ${props => props.theme.colors.gray[4]};
    }
  }
  > section {
    grid-column: 5 / 13;
  }
`

StyleGuideRenderer.propTypes = {
  title: PropTypes.string.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
  hasSidebar: PropTypes.bool
}

StyleGuideRenderer.defaultProps = {
  margins: false
}

const WrappedStyleGuideRenderer = (props) => (
  <ThemeWrapper>
    <StyleGuideRenderer {...props} />
  </ThemeWrapper>
)
/** @component */
export default WrappedStyleGuideRenderer
