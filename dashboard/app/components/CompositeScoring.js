import React from "react";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameComposite, onChangeNumberComposite, handleChangeNumberComposite, handleChangeNameComposite } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class CompositeScoring extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Qualitative, Macro & ESG Factors",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Qualitative, Macro & ESG Factors",
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
    this.props.handleChangeNameComposite(this.props.colorNameComposite)
    this.props.handleChangeNumberComposite(this.props.colorNumberComposite)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameComposite(this.props.handleNameComposite)
    this.props.onChangeNumberComposite(this.props.handleNumberComposite)
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
    return (
      <div className="composite-scoring">
        <div className="card-body">
          <div className="row card-title m-0 p-0">
            <a className="col-5 card-title">{valueTitle}</a>
            <label className="col-4"><span className="badge"> </span>&nbsp;Composite Scoring</label>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <h6 >Descriptive</h6>
          <div className="scroll-table">
            <table className="table">
              <tbody>
                <tr >
                  <td className="text-secondary pl-0" >Sector</td>
                  <td className="text-light">Software</td>
                </tr>
                <tr>
                  <td className="text-secondary pl-0">Business model</td>
                  <td className="text-light">B2B</td>
                </tr>
                <tr>
                  <td className="text-secondary pl-0">Revenue model</td>
                  <td className="text-light">Subscription</td>
                </tr>
                <tr>
                  <td className="text-secondary pl-0">Firm age</td>
                  <td className="text-light">6 years</td>
                </tr>
                <tr>
                  <td className="text-secondary pl-0">Number of employeers</td>
                  <td className="text-light">5D1-1000</td>
                </tr>
                <tr>
                  <td className="text-secondary pl-0">Firm grawth stage classsification </td>
                  <td className="text-light">Late growth stage</td>
                </tr>
                <tr>
                  <td className="text-light pl-0">Executive Team</td>
                  <td className="text-light"><big className="badge">5.3</big></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Modals
           visible={visible}
           onChangeNumber={this.props.onChangeNumberComposite}
           onChangeName={this.props.onChangeNameComposite}
           showModal={this.showModal}
           handleOk={this.handleOk}
           handleCancel={this.handleCancel}
           backgroundColor={this.props.colorNameComposite}
           colorNumber={this.props.colorNumberComposite}
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
  const { colorNumberComposite, colorNameComposite, handleNumberComposite, handleNameComposite } = props
  return { colorNumberComposite, colorNameComposite, handleNumberComposite, handleNameComposite }
}

export default connect(stateToProps, { onChangeNameComposite, onChangeNumberComposite, handleChangeNumberComposite, handleChangeNameComposite })(CompositeScoring)