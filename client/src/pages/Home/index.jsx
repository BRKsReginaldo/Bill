import React, {Component} from 'react'
import Page from "../../containers/Page";
import {Link} from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <Page title="Home">
        <div>Home Page</div>
        <Link to="/login">Login</Link>
      </Page>
    )
  }
}

export default Home
