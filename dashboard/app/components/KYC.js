import React from "react";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameKyc, onChangeNumberKyc, handleChangeNumberKyc, handleChangeNameKyc } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class KYC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "KYC",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "KYC",
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
    this.props.handleChangeNameKyc(this.props.colorNameKyc)
    this.props.handleChangeNumberKyc(this.props.colorNumberKyc)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameKyc(this.props.handleNameKyc)
    this.props.onChangeNumberKyc(this.props.handleNumberKyc)
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
    const { colorNumberKyc, colorNameKyc } = this.props
    var nameColor = []
    colors.map(item => {
      if (colorNameKyc == item.type) {
        nameColor = item.name
      }
    })
    return (
      <div className="kyc">
        <div className="card-header row " style={{ backgroundColor: nameColor[colorNumberKyc]}}>
          <h5 className="card-title col-10">{valueTitle}</h5>
          <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
          <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              Watchlist <div><label className="rounded-pill bg-success"></label></div>
            </div>
            <div className="col-3 border-left border-dark ">
              Regulatory <div><label className="rounded-pill bg-warning"></label></div>
            </div>
            <div className="col-3 border-left border-dark">
              Litigation <div><label className="rounded-pill bg-danger"></label></div>
            </div>
            <div className="col-3 border-left border-dark">
              Media <div><label className="rounded-pill bg-success"></label></div>
            </div>
          </div>
        </div>
        <div className="card-footer" style={{ backgroundColor: nameColor[colorNumberKyc]}}>
          <div className="row text-secondary text-center">
            <p className="col text-light bg-transparent"><b>Reports</b></p>
            <p className="col bg-transparent "><u>Director</u></p>
            <p className="col bg-transparent"><u>Consumer</u></p>
            <p className="col bg-transparent"><u>Trace</u></p>
            <p className="col bg-transparent"><u>AML</u></p>
          </div>
        </div>
        <Modals
           visible={visible}
           onChangeNumber={this.props.onChangeNumberKyc}
           onChangeName={this.props.onChangeNameKyc}
           showModal={this.showModal}
           handleOk={this.handleOk}
           handleCancel={this.handleCancel}
           backgroundColor={this.props.colorNameKyc}
           colorNumber={this.props.colorNumberKyc}
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
  const { colorNumberKyc, colorNameKyc, handleNumberKyc, handleNameKyc } = props
  return { colorNumberKyc, colorNameKyc, handleNumberKyc, handleNameKyc }
}

export default connect(stateToProps, { onChangeNameKyc, onChangeNumberKyc, handleChangeNumberKyc, handleChangeNameKyc })(KYC)