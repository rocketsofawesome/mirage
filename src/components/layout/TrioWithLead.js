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
              {children[index]}
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
              {children[index + 1]}
              {children[index + 2] && children[index + 2]}
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
    const { children, className } = this.props
    return (
      <FlexRow
        className={className}
        constrained>
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
`

TrioWithLead.propTypes = {
  children: PropTypes.array
}

export default TrioWithLead
