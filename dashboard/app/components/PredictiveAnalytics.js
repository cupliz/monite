import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { onChangeNamePredictive, onChangeNumberPredictive, handleChangeNumberPredictive, handleChangeNamePredictive } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class PredictiveAnalytics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenHeight: 1920,
      screenWidth: 1080,
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Predictive Analytics",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Predictive Analytics",
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
  columnOptions = (data) => {
    const options = {
      chart: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        type: "column",
        margin: [2, 0, 2, 0],
        width: 120,
        height: 0.02 * this.state.screenHeight,
        style: {
          overflow: "visible"
        },
        skipClone: true
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      series: [{
        data: data,
        pointStart: 1
      }],
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        lineColor: 'transparent',
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [0],
      },
      legend: {
        enabled: false
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true
      },
      plotOptions: {
        series: {
          animation: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2
              }
            }
          },
          fillOpacity: 0.25
        },
        column: {
          color: '#3BD445',
          negativeColor: "#C11B12",
          borderColor: "none"
        }
      }
    };
    return options
  }
  lineOptions = (categories, data1, data2) => {
    const options = {
      title: { text: null },
      chart: {
        height: this.state.screenHeight / 10,
        width: this.state.screenWidth / 3.5,
        backgroundColor: "transparent"
      },
      series: [
        {
          name: "",
          lineColor: "#103FCF",
          data: data1
        },
        {
          name: "",
          lineColor: "#39CC42",
          data: data2
        }
      ],
      legend: {
        enabled: false
      },
      xAxis: [
        {
          type: "category",
          categories,
          title: {
            text: null
          },
          labels: {
            style: {
              fontSize: this.state.screenWidth / 250
            }
          }
        }
      ],
      yAxis: {
        tickInterval: 100,
        max: 200,
        min: 0,
        title: {
          text: null
        },
        labels: {
          style: {
            fontSize: this.state.screenWidth / 250
          }
        }
      },
      plotOptions: { line: { marker: { enabled: false } } },
      credits: { enabled: false }
    };
    return options
  }
  tick = (value) => {
    if (value > 0) {
      return (
        <p> <span className="tick-up">&#9650;</span>{value} </p>
      )
    } else {
      return (
        <p> <span className="tick-down">&#9660;</span>{value} </p>
      )
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
    this.props.handleChangeNamePredictive(this.props.colorNamePredictive)
    this.props.handleChangeNumberPredictive(this.props.colorNumberPredictive)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNamePredictive(this.props.handleNamePredictive)
    this.props.onChangeNumberPredictive(this.props.handleNumberPredictive)
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
    const cat = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
    const blue = [160, 150, 140, 130, 100, 120, 130, 150, 140, 143, 90, 130, 100]
    const green = [100, 120, 125, 130, 160, 150, 130, 110, 147, 145, 160, 190, 200]
    const growthSummary = [
      {
        name: 'Sales',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [64, -158, 64, 64],
      },
      {
        name: 'EBITDA',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [10, 72, 10, 10],
      },
      {
        name: 'EBID',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [6, -308, 6, 6],
      },
      {
        name: 'Net Income',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [-14, -134, -14, -14],
      },
      {
        name: 'EPS (Diluted)',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [-6, -76, -6, 6],
      },
      {
        name: 'Speed Metric',
        chart: [30, -50, 90, 60, -20, -20, -50, -30, 90],
        sum: [10, -208, 60, 25],
      },
    ]
    const { visible, valueBody, valueTitle, visibleRemove } = this.state;
    return (
      <div className="predictive-analytics">
        <div className="card-body">
          <div className="row card-title">
            <h5 className="card-title col-10 text-white"><img src="/static/img/AMPLYFI_white.png" /> &nbsp; {valueTitle}</h5>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <div className="row growth-score" >
            <div className="col-4 ">
              <h6 className="text-light">Growth Score</h6>
            </div>
            <div className="col-8">
              <div className="row text-center">
                <div className="col-4 background-color"><label>High</label></div>
                <div className="col-4 background-color border-left border-dark"><label>34.56%</label><span className="ml-2 tick-down">&#9660;</span></div>
                <div className="col-4 background-color border-left border-dark"><label>20.56%</label><span className="ml-2 tick-down">&#9660;</span> </div>
              </div>
            </div>
          </div>
          <HighchartsReact highcharts={Highcharts} options={this.lineOptions(cat, blue, green)} style={{ marginTop: 2 }} />
          <div className="growth-summary">
            <h6 className="text-white">Growth Summary</h6>
            <div className="scroll-table">
              <table>
                <thead>
                  <tr>
                    <td width="30%" > </td>
                    <td width="30%" />
                    <td width="15%">1YR</td>
                    <td width="15%">3YR</td>
                    <td width="15%">5YR</td>
                    <td width="15%">10YR</td>
                  </tr>
                </thead>
                <tbody>
                  {growthSummary.map((data, i) => (
                    <tr key={i}>
                      <td>{data.name}</td>
                      <td> <HighchartsReact highcharts={Highcharts} options={this.columnOptions(data.chart)} /> </td>
                      <td> {this.tick(data.sum[0])}</td>
                      <td> {this.tick(data.sum[1])}</td>
                      <td> {this.tick(data.sum[2])}</td>
                      <td> {this.tick(data.sum[3])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modals
          visible={visible}
          onChangeNumber={this.props.onChangeNumberPredictive}
          onChangeName={this.props.onChangeNamePredictive}
          showModal={this.showModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          backgroundColor={this.props.colorNamePredictive}
          colorNumber={this.props.colorNumberPredictive}
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
  const { colorNumberPredictive, colorNamePredictive, handleNumberPredictive, handleNamePredictive } = props
  return { colorNumberPredictive, colorNamePredictive, handleNumberPredictive, handleNamePredictive }
}
export default connect(stateToProps, { onChangeNamePredictive, onChangeNumberPredictive, handleChangeNumberPredictive, handleChangeNamePredictive })(PredictiveAnalytics);
