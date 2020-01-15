import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../../store'

class Box2 extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return {}
  }
  componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    let { lastUpdate } = this.props
    return (
      <div className="card box2 gradient-45deg-indigo-blue gradient-shadow white-text">
        <div className="card-content center">
          <span className="left">{lastUpdate && lastUpdate.format('dddd')}</span>
          <span>{lastUpdate && lastUpdate.format("DD/MMM/YYYY")}</span>
          <span className="right">{lastUpdate && lastUpdate.format("HH:mm:ss")}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { lastUpdate } = state
  return { lastUpdate }
}
export default connect(mapStateToProps)(Box2)
// export default Box2