import React from "react";
import Slider from "react-slick";
import { Input, Icon, Modal } from 'antd'
import Modals from './modal'
import { colors } from './colors'
import { onChangeNameNews, onChangeNumberNews, handleChangeNumberNews, handleChangeNameNews } from '../actions'
import { connect } from 'react-redux'

const { TextArea } = Input
class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      valueBody: "A group of the development $ sale cyber-threat defence technology",
      hedleValueTitle: "News",
      hedleValueBody: "A group of the development $ sale cyber-threat defence technology",
      valueTitle: "News",
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
    this.props.handleChangeNameNews(this.props.colorNameNews)
    this.props.handleChangeNumberNews(this.props.colorNumberNews)
    this.setState({
      visible: false,
      hedleValueTitle: this.state.valueTitle,
      hedleValueBody: this.state.valueBody,
    });
  };

  handleCancel = e => {
    this.props.onChangeNameNews(this.props.handleNameNews)
    this.props.onChangeNumberNews(this.props.handleNumberNews)
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
    const { colorNumberNews, colorNameNews } = this.props
    var nameColor = []
    colors.map(item => {
      if (colorNameNews == item.type) {
        nameColor = item.name
      }
    })
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="news">
        <div className="card-header" style={{ backgroundColor: nameColor[colorNumberNews] }}>
          <div className="row pb-3 pt-0 mt-0">
            <div className="col-10"></div>
            <Icon type="delete" className="col-1 icon" onClick={this.showModalRemove} />
            <Icon type="setting" className="col-1 icon" onClick={this.showModal} />
          </div>
          <div className="row">
            <h5 className="col-4 card-title">{valueTitle}</h5>
            <div className="col-8">
              <div className="row">

                <div className="col-5 news-box">
                  <div className="text-muted">Sector News Sentiment</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
                <div className="col-3 news-box">
                  <div className="text-muted">Stores Today</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
                <div className="col-4 news-box">
                  <div className="text-muted">Coverage</div>
                  <div className="box-content">
                    239.60 <span className="text-danger">&#9660;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <hr />
          <Slider {...settings}>
            <div className="slider">
              <img src="/static/img/slide/1.jpg" alt="" />
              <p> Balderton Capital buys into Mike Lynch-backed Darktrace </p>
              <p className="text-muted">Financial Times</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/2.jpg" alt="" />
              <p> Non-profit Singaporean Digital Estate Defends with Darktrace AI </p>
              <p className="text-muted">Enterprise Innovation</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/3.jpg" alt="" />
              <p> Spear’s joins City Week’s 2019 international finance forum </p>
              <p className="text-muted">BBC</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/4.jpg" alt="" />
              <p> SingHealth, HSA and now Singapore Red Cross: Cyber experts explain how hackers do it </p>
              <p className="text-muted">IB Times</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/5.jpg" alt="" />
              <p>
                £31.5 m stolen from Binance exchange in crypto heist hits cryptocurrency values
              </p>
              <p className="text-muted">SC Magazine</p>
            </div>
            <div className="slider">
              <img src="/static/img/slide/6.jpg" alt="" />
              <p>
                How AI is fueling ‘next generation’ of cyber attacks
              </p>
              <p className="text-muted">Reuters</p>
            </div>
          </Slider>
        </div>
        <Modals
           visible={visible}
           onChangeNumber={this.props.onChangeNumberNews}
           onChangeName={this.props.onChangeNameNews}
           showModal={this.showModal}
           handleOk={this.handleOk}
           handleCancel={this.handleCancel}
           backgroundColor={this.props.colorNameNews}
           colorNumber={this.props.colorNumberNews}
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
          onOk={() => this.props.onOkRemove(this.props.index)}
          visible={visibleRemove}
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
  const { colorNumberNews, colorNameNews, handleNumberNews, handleNameNews } = props
  return { colorNumberNews, colorNameNews, handleNumberNews, handleNameNews }
}
export default connect(stateToProps, { onChangeNameNews, onChangeNumberNews, handleChangeNumberNews, handleChangeNameNews })(News)
