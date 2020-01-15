import React from "react";
import Slider from "react-slick";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { onChangeNameRisk, onChangeNumberRisk, handleChangeNumberRisk, handleChangeNameRisk } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class RiskCompositeIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Risk Analytics",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Risk Analytics",
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
    this.props.handleChangeNameRisk(this.props.colorNameRisk)
    this.props.handleChangeNumberRisk(this.props.colorNumberRisk)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameRisk(this.props.handleNameRisk)
    this.props.onChangeNumberRisk(this.props.handleNumberRisk)
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
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    const { visible, valueBody, valueTitle, visibleRemove } = this.state;
    return (
      <div className="rci">
        <div className="card-body">
          <div className="row card-title">
            <h6 className="col-10 text-white card-title">{valueTitle}</h6>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <Slider {...settings}>
            <div className="slider">
              <img src="/static/img/logo/01.png" alt="" />
              <p>86</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/02.png" alt="" />
              <p>88</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/03.png" alt="" />
              <p>92</p>
            </div>
            <div className="slider">
              <img src="/static/img/logo/04.png" alt="" />
              <p>89</p>
            </div>
          </Slider>
        </div>
        <Modals
         visible={visible}
         onChangeNumber={this.props.onChangeNumberRisk}
         onChangeName={this.props.onChangeNameRisk}
         showModal={this.showModal}
         handleOk={this.handleOk}
         handleCancel={this.handleCancel}
         backgroundColor={this.props.colorNameRisk}
         colorNumber={this.props.colorNumberRisk}
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
  const { colorNumberRisk, colorNameRisk, handleNumberRisk, handleNameRisk } = props
  return { colorNumberRisk, colorNameRisk, handleNumberRisk, handleNameRisk }
}
export default connect(stateToProps, { onChangeNameRisk, onChangeNumberRisk, handleChangeNumberRisk, handleChangeNameRisk })(RiskCompositeIndex);