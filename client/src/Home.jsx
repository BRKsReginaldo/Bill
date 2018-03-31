import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import Logo from './Logo.svg'
import Png from './logo.png'


export class Home extends Component {
  static propTypes = {

  }

  state = {

  }

  render() {
    return (
      <div>
        <img src={Logo}/>
        <img src={Png}/>
        <Link to="/test">Test</Link>
        <div>Welcome to Home View</div>
      </div>
    )
  }
}

export default Home
