import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FlexRow, FlexCol } from 'SRC'

class BaseTrioWithLead extends React.Component {
  parseTrio = (children, index, output) => {
    if (index < children.length && children.length >= 3) {
      if (children[index]){
        output.push(
          <div key={index} className='roa-trio-lead'>
            <FlexCol
              mobile={{
                width: 4
              }}
              tablet={{
                width: 12
              }}
              desktop={{
                width: 7
              }}>
              <div className='child-element'>{children[index]}</div>
            </FlexCol>
            {children[index + 1] &&
              <FlexCol
                className='roa-trio-lead-stacked'
                mobile={{
                  width: 4
                }}
                tablet={{
                  width: 12
                }}
                desktop={{
                  width: 4,
                  span: 1
                }}
              >
              <div className='child-element'>{children[index + 1]}</div>
              <div className='child-element'>{children[index + 2] && children[index + 2]}</div>
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
    const { children, className, constrained } = this.props
    return (
      <FlexRow
        className={className}
        constrained={constrained}
        padding>
        {this.parseTrio(children, 0, [])}
      </FlexRow>
    )
  }
}

const TrioWithLead = styled(BaseTrioWithLead)`
  .roa-trio-lead{
    display: flex;
    flex-wrap: wrap;
  }
  .roa-trio-lead-stacked {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  .child-element {
    margin-bottom: 6rem;
  }
`

TrioWithLead.propTypes = {
  children: PropTypes.array,
  constrained: PropTypes.bool
}

TrioWithLead.defaultProps = {
  constrained: false
}

export default TrioWithLead
