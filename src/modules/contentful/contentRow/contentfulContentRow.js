import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  Duet,
  FullBleed,
  Quartet,
  Solo,
  Trio,
  TrioWithLead,
  ContentfulRenderer,
  ContentfulResponsiveVideo,
  ContentfulResponsiveImages,
  Tablet,
  TabletMax,
  Default
} from 'SRC'

const LAYOUT_RENDER_MAP = {
  'Duet': (entries, {sys, ...props}) => {
    return (
      <div>
        <Default displayTarget='belowTabletMax'>
          <Solo>
            {
              entries.map((entry, index) => {
                return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
              })
            }
          </Solo>
        </Default>
        <TabletMax laptopDisplay='block'>
          <Duet {...props} key={sys.id}>
            {
              entries.map((entry, index) => {
                return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
              })
            }
          </Duet>
        </TabletMax>
      </div>
    )
  },
  'Full Bleed': (entries, {sys, ...props}) =>
    <FullBleed {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </FullBleed>,
  'Quartet': (entries, {sys, ...props}) =>
    <div>
      <Default>
        <Solo>
          {
            entries.map((entry, index) => {
              return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
            })
          }
        </Solo>
      </Default>
      <Tablet laptopDisplay='block'>
        <Quartet {...props} key={sys.id}>
          {
            entries.map((entry, index) => {
              return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
            })
          }
        </Quartet>
      </Tablet>
    </div>,
  'Solo': (entries, {sys, ...props}) =>
    <Solo padding {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </Solo>,
  'Trio': (entries, {sys, ...props}) =>
  <div>
    <Default>
      <Solo>
        {
          entries.map((entry, index) => {
            return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
          })
        }
      </Solo>
    </Default>
    <Tablet laptopDisplay='block'>
      <Trio {...props} key={sys.id}>
        {
          entries.map((entry, index) => {
            return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
          })
        }
      </Trio>
    </Tablet>
  </div>
    ,
  'Trio With Lead': (entries, {sys, ...props}) =>
    <TrioWithLead {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </TrioWithLead>
}
const BaseContentfulContentRow = ({
  className,
  fields: {
    background,
    layout,
    entryElements,
  },
  ...props
}) => {
  if (background) {
    return (
      <ContentfulRenderer className={className} {...background}>
        {LAYOUT_RENDER_MAP[layout](entryElements, props)}
      </ContentfulRenderer>
    )
  } else {
    return (LAYOUT_RENDER_MAP[layout](entryElements, props))
  }
}

const ContentfulContentRow = styled(BaseContentfulContentRow)`
  > div {
    position: relative;
    z-index: 1;
    padding-top: 2rem;
  }
  > ${ContentfulResponsiveVideo} ,   >  ${ContentfulResponsiveImages} {
    video {
      height: 100%;
      ${props => props.theme.breakpointsVerbose.aboveDesktop`
        height: 75%;
      `}
    }
    video, img {
      position: absolute;
      top: 0;
      z-index: 0;
    }
    article {
      display: flex;
      justify-content: flex-start;
      padding-top: 4rem;
      margin-bottom: 4rem;
      ${props => props.theme.breakpointsVerbose.aboveTablet`
        padding-top: 2rem;
        margin-bottom: 6rem;
      `}
    }
  }
`

ContentfulContentRow.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    layout: PropTypes.string,
    entryElements: PropTypes.array
  })
}

/** @component */
export default ContentfulContentRow
