/** @flow */

import React, {Component} from 'react'
import {hot} from "react-hot-loader";
import Aux from "./hoc/Aux";
import Routes from "./containers/Routes";

export class App extends Component<{}> {
  render() {
    return (
      <Aux>
        <Routes/>
      </Aux>
    )
  }
}

export default hot(module)(App)
