import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNamePeerCompos, onChangeNumberPeerCompos, handleChangeNumberPeerCompos, handleChangeNamePeerCompos } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class PeerComps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenHeight: 1920,
      screenWidth: 1080,
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Share of Aggregat Annual Peer Group Ternover",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Share of Aggregat Annual Peer Group Ternover",
      visibleRemove: false
    }
  } 
  async componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions()
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    this.setState({ screenWidth, screenHeight });
  }
  stackedColumnOptions = (series, categories) => {
    const options = {
      chart: {
        type: "column",
        height: this.state.screenHeight / 3.7,
        backgroundColor: "transparent"
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      title: null,
      xAxis: {
        categories,
        lineColor: "#16191B",
        lineWidth: 1,
        floor: 0
      },
      yAxis: {
        gridLineColor: "#16191B",
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        lineColor: "transparent"
      },
      plotOptions: {
        column: {
          stacking: "percent",
          dataLabels: {
            enabled: true,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
            style: {
              textShadow: 'none',
              fontSize: '1vh'
            },
            formatter: function () {
              // numberFormat takes your label's value and the decimal places to show
              return Highcharts.numberFormat(this.y, 2) + '%';
            },
          }
        },
        series: {
          borderColor: "#16191B",
          borderWidth: 0,
          groupPadding: -0.12,
          enableMouseTracking: false,
          stacking: "percent"
        },
        dataLabels: {
          enabled: false
        }
      },
      series
    };

    return options;
  };

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
    this.props.handleChangeNamePeerCompos(this.props.colorNamePeerCompos)
    this.props.handleChangeNumberPeerCompos(this.props.colorNumberPeerCompos)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNamePeerCompos(this.props.handleNamePeerCompos)
    this.props.onChangeNumberPeerCompos(this.props.handleNumberPeerCompos)
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
    const series1 = [
      {
        data: [1.7, 2.7, 4.3],
        color: "#3275BE"
      },
      {
        data: [13.2, 14.9, 16.6],
        color: "#A33236"
      },
      {
        data: [12.4, 13.3, 13.6],
        color: "#2922C9"
      },
      {
        data: [55.6, 51.7, 46.7],
        color: "#15A47C"
      },
      {
        data: [17.1, 17.4, 19.1],
        color: "#4C1B85"
      }
    ]
    const series1Categories = ["100%", "100%", "100%"]
    const series2 = [
      {
        data: [4.3],
        color: "transparent",
      },
      {
        data: [16.6],
        color: "transparent",
      },
      {
        data: [13.6],
        color: "transparent",
      },
      {
        data: [46.7],
        color: "transparent",
      },
      {
        data: [19.1],
        color: "transparent",
      }
    ]
    const { visible, valueBody, valueTitle, visibleRemove } = this.state;
    return (
      <div className="peer-comps">
        <div className="card-body">
          <div className="row card-title">
            <h5 className="col-10 text-white card-title">{valueTitle}</h5>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <div className="row presentation">
            <div className="col-4">
              <div className="row">
                <div className="DarkTrace" />
                <label>Dark Trace</label>
              </div>
              <div className="row">
                <div className="FireEye" />
                <label>FireEye</label>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="ForeScout" />
                <label>Fore Scout</label>
              </div>
              <div className="row">
                <div className="CyberArk" />
                <label>CyberArk</label>
              </div>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="Rapid7" />
                <label>Rapid 7</label>
              </div>
            </div>
          </div>

          <div className="row total">
            <div className="col-10">
              <div className="row">
                <div className="col-4">
                  <div className="text-center">2016 <br />£977.723.070</div>
                </div>
                <div className="col-4">
                  <div className="text-center">2017 <br />£1.160.112.610</div>
                </div>
                <div className="col-4">
                  <div className="text-center">2018 <br />£1.380.650.000</div>
                </div>
              </div>

            </div>
            <div className="col-2 difference text-center">Difference</div>
          </div>

          <div className="row mt-0 pt-0">
            <div className="col-10">
              <HighchartsReact highcharts={Highcharts} options={this.stackedColumnOptions(series1, series1Categories)} />
            </div>
            <div className="col-2 difference">
              <HighchartsReact highcharts={Highcharts} options={this.stackedColumnOptions(series2, null)} />
            </div>
          </div>
        </div>
        <Modals
           visible={visible}
           onChangeNumber={this.props.onChangeNumberPeerCompos}
           onChangeName={this.props.onChangeNamePeerCompos}
           showModal={this.showModal}
           handleOk={this.handleOk}
           handleCancel={this.handleCancel}
           backgroundColor={this.props.colorNamePeerCompos}
           colorNumber={this.props.colorNumberPeerCompos}
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
  const { colorNumberPeerCompos, colorNamePeerCompos, handleNumberPeerCompos, handleNamePeerCompos } = props
  return { colorNumberPeerCompos, colorNamePeerCompos, handleNumberPeerCompos, handleNamePeerCompos }
}
export default connect(stateToProps, { onChangeNamePeerCompos, onChangeNumberPeerCompos, handleChangeNumberPeerCompos, handleChangeNamePeerCompos })(PeerComps)