import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  FlexRow,
  FlexCol,
  AnimatedBalloon,
  AnimatedCloudA,
  AnimatedCloudB,
  AnimatedCloudC,
  Default,
  Tablet,
  ContentfulTout
} from 'SRC'

class BaseTrioWithLead extends React.Component {
  parseTrio = (children, index, output) => {
    if (index < children.length && children.length >= 3) {
      if (children[index]){
        output.push(
          <div key={index} className='roa-trio-lead'>
            <FlexCol
              mobile={{width: 4}}
              tablet={{width: 12}}
              desktop={{width: 7}}>
              <div className='roa-trio-with-lead-wrapper'>
                {children[index]}
                <AnimatedCloudA />
              </div>
            </FlexCol>
            {children[index + 1] &&
              <FlexCol
                className='roa-trio-lead-stacked'
                mobile={{width: 4}}
                tablet={{width: 12}}
                desktop={{width: 4, span: 1}}
              >
              <div className='roa-trio-with-lead-wrapper'>
                {children[index + 1]}
                <AnimatedCloudB />
              </div>
              <div className='roa-trio-with-lead-wrapper'>
                {children[index + 2] && children[index + 2]}
                <AnimatedCloudC />
                <Default displayTarget='belowTablet'>
                  <AnimatedBalloon width={'50%'} />
                </Default>
                <Tablet laptopDisplay='block'>
                  <AnimatedBalloon desktopAnimation width={'50%'} />
                </Tablet>
              </div>
            </FlexCol>
            }
          </div>
        )
      }
      return this.parseTrio(children.slice(0, 3), index + 3, output)
    } else {
      return output
    }
  }
  render() {
    const {
      children,
      className,
      constrained,
      padding
    } = this.props
    return (
      <FlexRow
        className={className}
        constrained={constrained}
        padding={padding}>
        {this.parseTrio(children, 0, [])}
      </FlexRow>
    )
  }
}

const TrioWithLead = styled(BaseTrioWithLead)`
margin: 0 2rem;
${ContentfulTout} a {
  margin-bottom: 0;
}
${props => props.theme.breakpointsVerbose.aboveTablet`
  margin-bottom: 6rem;
`}
  .roa-trio-lead{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .roa-trio-lead-stacked {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  .roa-trio-with-lead-wrapper {
    position: relative;
  }
`

TrioWithLead.propTypes = {
  children: PropTypes.array,
  constrained: PropTypes.bool,
  padding: PropTypes.bool
}

TrioWithLead.defaultProps = {
  constrained: false,
  padding: true
}

export default TrioWithLead
