

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameFinancial, onChangeNumberFinancial, handleChangeNumberFinancial, handleChangeNameFinancial } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class FinancialMetrics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screenHeight: 1920,
      screenWidth: 1080,
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "Key Financials Metrics",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "Key Financials Metrics",
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
    this.props.handleChangeNameFinancial(this.props.colorNameFinancial)
    this.props.handleChangeNumberFinancial(this.props.colorNumberFinancial)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameFinancial(this.props.handleNameFinancial)
    this.props.onChangeNumberFinancial(this.props.handleNumberFinancial)
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
  columnOptions = (data, type, width) => {
    const options = {
      chart: {
        // renderTo: (options.chart && options.chart.renderTo) || this,
        backgroundColor: null,
        borderWidth: 0,
        type: type,
        margin: [2, 0, 2, 0],
        width: width,
        height: 20,
        style: {
          overflow: "visible"
        },
        // small optimalization, saves 1-2 ms each sparkline
        skipClone: false
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
        lineWidth: 1,
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
        lineColor: 'transparent'
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
          lineWidth: 2,
          borderWidth: 0,
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
        },
        area: {
          color: '#53fc9f',
          borderColor: "none"
        }
      },
    };
    return options
  }
  render() {
    const growthSummary = [
      {
        name: "Turnover",
        year2017: '£30.759.000',
        year2018: "£59.484.000",
        chart: [10, -8, 10, 40, 30],
      },
      {
        name: "Gress Profit Margin",
        year2017: '76,6%',
        year2018: "81,9%",
        chart: [10, 50, 0, -30, 20],
      },
      {
        name: "Net Income Morgin",
        year2017: '(80,9%)',
        year2018: "(66,1%)",
        chart: [10, 50, -10, 40, 20],
      },
      {
        name: "Return on Equity",
        year2017: '(178,3%)',
        year2018: "(290,4%)",
        chart: [10, 50, 10, 5, 10],
      },
      {
        name: "Turnover/Employee",
        year2017: '£52.941',
        year2018: "£79,952",
        chart: [10, -20, 0, 50, 10],
      },
      {
        name: "Net Income/Employee",
        year2017: '(£42.814)',
        year2018: "(£52.871)",
        chart: [10, 50, -20, 30, 10],
      }
    ]
    const { visible, valueBody, valueTitle, visibleRemove } = this.state;
    return (
      <div className="financial-metrics">
        <div className="card-body">
          <div className="card-title row">
            <div className="col-10 text-white" >{valueTitle}</div>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <div className="scroll-table">
            <table className="table">
              <thead>
                <tr className="text-light">
                  <td></td>
                  <td>2017</td>
                  <td>2018</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {growthSummary.map((data, index) => (
                  <tr key={index} className="text-light">
                    <td>{data.name}</td>
                    <td>{data.year2017}</td>
                    <td>{data.year2018}</td>
                    <td>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={this.columnOptions(data.chart, "area", 70)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Modals
          visible={visible}
          onChangeNumber={this.props.onChangeNumberFinancial}
          onChangeName={this.props.onChangeNameFinancial}
          showModal={this.showModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          backgroundColor={this.props.colorNameFinancial}
          colorNumber={this.props.colorNumberFinancial}
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
  const { colorNumberFinancial, colorNameFinancial, handleNumberFinancial, handleNameFinancial } = props
  return { colorNumberFinancial, colorNameFinancial, handleNumberFinancial, handleNameFinancial }
}

export default connect(stateToProps, { onChangeNameFinancial, onChangeNumberFinancial, handleChangeNumberFinancial, handleChangeNameFinancial })(FinancialMetrics)


