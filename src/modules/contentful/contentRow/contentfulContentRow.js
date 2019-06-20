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
  ContentfulResponsiveVideo
} from 'SRC'

const LAYOUT_RENDER_MAP = {
  'Duet': (entries, {sys, ...props}) => {
    return (
      <Duet {...props} key={sys.id}>
        {
          entries.map((entry, index) => {
            return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
          })
        }
      </Duet>
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
    <Quartet {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </Quartet>,
  'Solo': (entries, {sys, ...props}) =>
    <Solo {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </Solo>,
  'Trio': (entries, {sys, ...props}) =>
    <Trio {...props} key={sys.id}>
      {
        entries.map((entry, index) => {
          return <ContentfulRenderer {...entry} key={`${sys.id}-${entry.sys.id}-${index}`} />
        })
      }
    </Trio>,
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
  ${ContentfulResponsiveVideo} {
    video {
      position: absolute;
      height: 70%;
      top: 0;
    }
    article {
      display: flex;
      justify-content: flex-start;
      padding-top: 4rem;
      padding-bottom: 2rem;
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
