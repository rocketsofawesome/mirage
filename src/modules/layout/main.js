import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Header, Footer } from 'SRC'

export class BaseMainLayout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contentTopMargin: '6.2rem'
    }
  }

  setMargin = (height) => {
    // console.log(height)
    const { contentTopMargin } = this.state
    const currentMargin = parseFloat(contentTopMargin.replace('rem', ''))
    if (height !== currentMargin) {
      this.setState({ contentTopMargin: `${height}rem` })
    }
  }

  render () {
    const {
      className,
      children,
      footerProps,
      headerProps
    } = this.props
    const { contentTopMargin } = this.state
    return (
      <main className={className}>
        <Header {...headerProps} setMargin={this.setMargin}/>
        <article style={{marginTop: contentTopMargin}}>
          {children}
        </article>
        <Footer {...footerProps} />
      </main>
    )
  }
}

const MainLayout = styled(BaseMainLayout)`
  position: relative;
  overflow: auto;
  ${Header} {
    width: 100%;
    top: 0;
    left: 0;
  }
  > article {
    position: relative;
    width: 100%;
  }
`

MainLayout.propTypes = {
  headerProps: PropTypes.object
}

/** @component */
export default MainLayout
