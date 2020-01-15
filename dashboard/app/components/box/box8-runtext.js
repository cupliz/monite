import React from 'react'
import Router from 'next/router'

class Box extends React.Component {
  gotoAdmin = () => {
    Router.push('/admin')
  }
  render() {
    return (
      <div className="card box8 gradient-45deg-purple-deep-orange gradient-shadow white-text" onClick={this.gotoAdmin}>
        <div className="card-content center">
          <marquee behavior="" direction="left"> We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team you can help us by donating or backing us on Patreon.
            Any amount would help support and continue development on this project and is greatly appreciated.</marquee>
        </div>
      </div>
    )
  }
}
export default Box