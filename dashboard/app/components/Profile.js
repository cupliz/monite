import React, { Component } from "react";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameProfile, onChangeNumberProfile, handleChangeNumberProfile, handleChangeNameProfile } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input;
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Darktrace",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Darktrace",
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
  onCancelRemove = () => {
    this.setState({ visibleRemove: false })
  }
  handleOk = e => {
    this.props.handleChangeNameProfile(this.props.colorNameProfile)
    this.props.handleChangeNumberProfile(this.props.colorNumberProfile)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameProfile(this.props.handleNameProfile)
    this.props.onChangeNumberProfile(this.props.handleNumberProfile)
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
    const { colorNumberProfile, colorNameProfile } = this.props
    var nameColor = []
    colors.map(item => {
      if (colorNameProfile == item.type) {
        nameColor = item.name
      }
    })
    return (
      <div className="box-title">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img src="../static/img/imageDarktrace.jpeg " className="logo rounded" />
            </div>
            <div className="col-6">
              <h5 className="col bg-transparent card-title">{valueTitle}</h5>
              <p className="col bg-transparent card-desc">www.darktrace.com</p>
              <div className="row col bg-transparent social">
                <img src="../static/img/social/facebook.png" />
                <img src="../static/img/social/twitter.png" />
                <img src="../static/img/social/instagram.jpg" />
                <img src="../static/img/social/linkedin.png" />
              </div>
            </div>
            <div className="col-2 rounded-pill text-center private" style={{ backgroundColor: nameColor[colorNumberProfile] }}>Private</div>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
        </div>

        <div className="card-text">{valueBody}</div>
        <div className="card-footer" style={{ backgroundColor: nameColor[colorNumberProfile] }}>
          <div className="row">
            <div className="col">
              <div className="text-secondary">Headquarters</div>
              <div>London, UK</div>
            </div>
            <div className="col">
              <div className="text-secondary">Founded</div>
              <div>2013</div>
            </div>
            <div className="col">
              <div className="text-secondary">SIC</div>
              <div>62012</div>
            </div>
            <div className="col">
              <div className="text-secondary">Status</div>
              <div>Active-Account filed</div>
            </div>
          </div>
        </div>
        <Modals
          visible={visible}
          onChangeNumber={this.props.onChangeNumberProfile}
          onChangeName={this.props.onChangeNameProfile}
          showModal={this.showModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          backgroundColor={this.props.colorNameProfile}
          colorNumber={this.props.colorNumberProfile}
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
                placeholder="text Body"
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
  const { colorNumberProfile, colorNameProfile, handleNumberProfile, handleNameProfile } = props
  return { colorNumberProfile, colorNameProfile, handleNumberProfile, handleNameProfile }
}

export default connect(stateToProps, { onChangeNameProfile, onChangeNumberProfile, handleChangeNumberProfile, handleChangeNameProfile })(Profile)