import React from 'react'

class Box1 extends React.Component {
  render() {
    return (
      <div className="card box1 gradient-45deg-orange-amber gradient-shadow white-text" onClick={()=>this.props.redirect('/')} >
        <div className="card-content center">
          <span>Riverdale Valley Technical School</span>
        </div>
      </div>
    )
  }
}
export default Box1