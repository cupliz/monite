import React from "react";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameWeb, onChangeNumberWeb, handleChangeNumberWeb, handleChangeNameWeb } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class WebAnalytics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Web Analytics",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Web Analytics",
      visibleRemove: false
    }
  }
 
  showModal = () => {
    if (!this.state.visible) {
      this.setState({
        visible: true,
      });
    }
  };
  showModalRemove = () => {
    if (!this.state.visibleRemove) {
      this.setState({ visibleRemove: true })
    }
  }
  onOkRemove = () => {
    const { renderId, toggle, index, id } = this.props
    toggle()
    renderId.splice(index, 1)
    this.setState({ visibleRemove: false })
  }
  onCancelRemove = () => {
    this.setState({ visibleRemove: false })
  }

  handleCancel = e => {
    this.props.onChangeNameWeb(this.props.handleNameWeb)
    this.props.onChangeNumberWeb(this.props.handleNumberWeb)
    this.setState({
      visible: false,
      valueTitle: this.state.hedleValueTitle,
      valueBody: this.state.hedleValueBody
    });
  };
  onChangeBody = (e) => {
    this.setState({ valueBody: e.target.value })
  }
  onChangeTitle = (e) => {
    this.setState({ valueTitle: e.target.value })
  }
  render() {
    const { visible, valueBody, valueTitle, visibleRemove } = this.state;
    const { colorNumberWeb, colorNameWeb } = this.props
    var nameColor = []
    colors.map(item => {
      if (colorNameWeb == item.type) {
        nameColor = item.name
      }
    })
    return (
      <div className="web-analytics">
        <div className="card-header" style={{backgroundColor: nameColor[colorNumberWeb]}}>
          <div className="row card-title">
            <div className="card-title m-0 pl-3 col-10">{valueTitle}</div>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
        </div>
        <div className="card-body">
          <div>
            Darktrace <p className="d-inline text-muted">exists in</p> Travel, video, and Healthcare
          </div>

          <div className="row pl-4 pr-3">
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Website Rank</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>6.7 </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Googel Trends</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>6.7 </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
            <div className="col-4">
              <p className="m-0 text-secondary"><small>Time on site</small>
              </p>
              <div className="row m-0 p-0 d-flex">
                <h6>2 mins </h6>
                <span className="ml-2 tick-down">&#9660;</span>
              </div>
            </div>
          </div>

          <div className="row text-center inner-box">
            <div className="col ">
              <h4 className="">Connected Trends</h4>
              <div className="text-blue">Supply chain attacks</div>
              <div className="ml-20 text-white">Darktrace  <div className="d-inline text-purple">ODPR</div></div>
              <div className="text-green">Susinuss email comprise attacks</div>
              <div className="text-blue pb-4">IoT cyber security</div>
            </div>
            <div className="col ">
              <h4>Company Trends</h4>
              <div className="text-green">Enterprise Cyber<div className="d-inline text-purple"> Cyber Al</div></div>
              <div className="text-purple">Antigena <div className="d-inline text-white">Darktrace </div><div className="d-inline text-blue">SaaS</div></div>
              <div className="text-green">Autonomous response</div>
              <div className="text-blue">Immune system</div>
            </div>
          </div>
        </div>
        <Modals
          visible={visible}
          onChangeNumber={this.props.onChangeNumberWeb}
          onChangeName={this.props.onChangeNameWeb}
          showModal={this.showModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          backgroundColor={this.props.colorNameWeb}
          colorNumber={this.props.colorNumberWeb}
        >
          <div >
            <div>
              Title
              <Input
                placeholder="text title"
                value={valueTitle}
                onChange={this.onChangeTitle}
              />
            </div>
            <div>
              Body
        <TextArea
                placeholder="text body"
                value={valueBody}
                autosize
                autosize={{ minRows: 2, maxRows: 6 }}
                onChange={this.onChangeBody}
              />
            </div>
          </div>
        </Modals>
        <Modal
          visible={visibleRemove}
          onOk={() => this.props.onOkRemove(this.props.index)}
          onCancel={this.onCancelRemove}
          zIndex={1000}
          style={{ padding: 40 }}
        >
          <div >Are you sure you want to delete this card?</div>
        </Modal>
      </div>
    );
  }
}

var stateToProps = (props) => {
  const { colorNumberWeb, colorNameWeb, handleNumberWeb, handleNameWeb } = props
  return { colorNumberWeb, colorNameWeb, handleNumberWeb, handleNameWeb }
}
export default connect(stateToProps, { onChangeNameWeb, onChangeNumberWeb, handleChangeNumberWeb, handleChangeNameWeb })(WebAnalytics);