import React from 'react'

class Box extends React.Component {
  render() {
    const { title, icon, redirect } = this.props
    return (
      <div className="card box-half red gradient-shadow white-text" onClick={() => redirect('/pengajar')}>
        <div className="box-title center">
          <i className="material-icons left">{icon}</i>{title}<i className="material-icons right">zoom_out_map</i>
        </div>
        <div className="card-content">
          Integer quis orci at lorem pellentesque eleifend eget eu mauris. Phasellus gravida nec leo at dapibus. Fusce justo augue, volutpat a blandit a, tincidunt imperdiet ipsum. Morbi fermentum volutpat magna sed dignissim. Etiam consectetur ipsum sit amet semper luctus. Morbi id accumsan justo. Fusce id feugiat sem. Curabitur vel pellentesque eros, vel lacinia elit. Praesent consectetur est dignissim eros rhoncus rhoncus. Etiam luctus ligula sed orci vulputate ullamcorper.
        </div>
      </div>
    )
  }
}
export default Box