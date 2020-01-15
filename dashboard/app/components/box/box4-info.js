import React from 'react'

class Box extends React.Component {
  render() {
    const { title, icon, redirect, data } = this.props
    return (
      <div className="card box-half purple gradient-shadow white-text" onClick={() => redirect('/info')}>
        <div className="box-title center">
          <i className="material-icons left">{icon}</i>{title}<i className="material-icons right">zoom_out_map</i>
        </div>
        <div className="card-content">
          {data && data.length && data.map(({ info }, index) => (
            <li key={index}> {info} </li>
          ))}
        </div>
      </div>
    )
  }
}
export default Box