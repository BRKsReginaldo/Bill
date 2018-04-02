/** @flow */

import React, {Component} from 'react'
import Helmet from 'react-helmet'

type Props = {
  children: string,
  title: string,
  className: Array<string>
}

export class Page extends Component<Props> {
  render() {
    return (
      <div className={[
        "page",
        ...this.props.className
      ].join(' ')}>
        <Helmet>
          <title>{this.props.title} | Bill</title>
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}

Page.defaultProps = {
  className: []
}

export default Page
