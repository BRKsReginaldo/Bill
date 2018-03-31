import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export class Test extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>Welcome to Test View</div>
      </div>
    )
  }
}

export default Test
