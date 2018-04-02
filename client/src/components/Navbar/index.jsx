import React, {Component} from 'react'

type Props = {

}

export class Navbar extends Component<Props> {
  state = {

  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__inner">
          <div className="navbar__left">Left Content</div>
          <div className="navbar__center">Center content</div>
          <div className="navbar__right">Right Content</div>
        </div>
      </div>
    )
  }
}

export default Navbar
