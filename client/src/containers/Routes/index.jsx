import React, {Component} from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../../components/ui/Loading'
import Aux from "../../hoc/Aux";
import {Navbar} from "../../components/Navbar";

export class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
        <Aux>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Loadable({
              loader: () => import('../../pages/Home'),
              loading: Loading
            })}/>
            <Route exact path="/test" component={() => <div>hello</div>}/>
            {/*Add a 404 route*/}
            <Redirect from="*" to="/"/>
          </Switch>
        </Aux>
      </BrowserRouter>
    )
  }
}

export default Routes
