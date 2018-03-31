import React from 'react'
import {hot} from 'react-hot-loader'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Loadable from 'react-loadable'

class App extends React.Component {
  componentDidMount() {
    console.log(config.API_URL)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Loadable({
            loader: () => import('./Home.jsx'),
            loading: () => (
              <div>loading...</div>
            )
          })}/>
          <Route exact path="/test" component={Loadable({
            loader: () => import('./Test.jsx'),
            loading: () => (
              <div>loading...</div>
            )
          })}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default hot(module)(App)
