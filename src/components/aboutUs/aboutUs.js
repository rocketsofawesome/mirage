import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  P,
  FlexCol
} from 'SRC'

import defaultProps from './defaultProps'

const BaseAboutUs = ({className, header, sections, footer, ...props}) => {
  return (<section className={className}>
    <FlexCol mobile={{width: 4}} desktop={{width: 6, span: 3}}>
      <H1>{header}</H1>
    </FlexCol>
    <FlexCol mobile={{width: 4}} desktop={{width: 10, span: 1}}>
      <div className={'flexDiv'}>
        {
          sections.map((section, i) => {
            return (
              <FlexCol mobile={{width: 4}} desktop={{width: 4}} key={`about-us-${i}`}>
                <div>
                  <H2>{section.title}</H2>
                  <P>{section.body}</P>
                </div>
              </FlexCol>
            )
          })
        }
      </div>
    </FlexCol>
    <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
      <H2>{footer}</H2>
    </FlexCol>
  </section>)
}

const AboutUs = styled(BaseAboutUs)`
  ${H1}, ${H2} {
    text-align: center;
    text-transform: uppercase;
  }
  ${H1} {
    margin: 0 auto;
    margin-bottom: 20px;
  }
  ${H2} {
    color: ${props => props.theme.colors.rocketBlue};
    margin-top: 40px;
    margin-bottom: 10px;
  }
  ${P} {
    text-align: center;
    line-height: 1.5;
    max-width: 450px;
    margin: 0 auto;
    font-size: 18px;
    letter-spacing: 1px;
  }
  .flexDiv {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`

AboutUs.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default AboutUs
