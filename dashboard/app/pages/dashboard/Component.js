import React, { useState, useCallback } from 'react'
import { DropTarget } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Header from "../../components/Header";
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux'
import { colors } from '../../components/colors'
import _ from 'lodash'

import Profile from "../../components/Profile";
import FinancialMetrics from "../../components/FinancialMetrics";
import PeerComps from "../../components/PeerComps";
import KYC from "../../components/KYC";
import WebAnalytics from "../../components/WebAnalytics";
import CompositeScoring from "../../components/CompositeScoring";
import News from "../../components/News";
import PredictiveAnalytics from "../../components/PredictiveAnalytics";
import RiskCompositeIndex from "../../components/RiskCompositeIndex";

const ResponsiveGridLayout = WidthProvider(Responsive);

const TargetBoxRaw = ({
  menuData,
  connectDropTarget,
  colorNumberProfile,
  colorNameProfile,
  colorNumberComposite,
  colorNameComposite,
  colorNumberFinancial,
  colorNameFinancial,
  colorNumberKyc,
  colorNameKyc,
  colorNumberNews,
  colorNameNews,
  colorNumberPeerCompos,
  colorNamePeerCompos,
  colorNumberPredictive,
  colorNamePredictive,
  colorNumberRisk,
  colorNameRisk,
  colorNumberWeb,
  colorNameWeb,
  getDropResult,
}) => {
  {
    const [renderId, setRenderId] = useState([])
    const [mounted, setMounted] = useState(true);
    const onOkRemove = (index) => {
      setRenderId(_.reject(renderId, { i: index }));
      setMounted(!mounted)
    };


    if (getDropResult) {
      renderId.push(menuData)
      renderId.map((item, index) => {
        renderId[index].i = index.toString()
      })
    }
    var colorNameComposites = []
    var colorNameFinancials = []
    var colorNameKycs = []
    var colorNameNewss = []
    var colorNamePeerComposs = []
    var colorNamePredictives = []
    var colorNameRisks = []
    var colorNameWebs = []
    var colorNameProfiles = []
    colors.map(item => {
      if (item.type == colorNameProfile) {
        return colorNameProfiles = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameComposite) {
        return colorNameComposites = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameFinancial) {
        return colorNameFinancials = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameProfile) {
        return colorNameProfiles = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameKyc) {
        return colorNameKycs = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameNews) {
        return colorNameNewss = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNamePeerCompos) {
        return colorNamePeerComposs = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNamePredictive) {
        return colorNamePredictives = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameRisk) {
        return colorNameRisks = item.name
      }
    })
    colors.map(item => {
      if (item.type == colorNameWeb) {
        return colorNameWebs = item.name
      }
    })
    return connectDropTarget(
      <div
        className="theme-dark"
      >
        <Header />
        <ResponsiveGridLayout
          rowHeight={30}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          width={1200}
          cols={{ lg: 90, md: 60, sm: 30, xs: 15, xxs: 9 }}
          draggableCancel="input,textarea"
        >
          {renderId.map((item, index) => {
            switch (item.name) {
              case "Profile":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 3, minH: 3, minW: 25 }}
                    style={{ backgroundColor: colorNameProfiles[colorNumberProfile] }}>
                    <Profile
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "FinancialMetrics":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 6, minH: 6, minW: 20 }}
                    style={{ backgroundColor: colorNameFinancials[colorNumberFinancial] }}>
                    <FinancialMetrics
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "PeerComps":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 7, minH: 7, minW: 20 }}
                    style={{ backgroundColor: colorNamePeerComposs[colorNumberPeerCompos] }}>
                    <PeerComps
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "KYC":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 4, minH: 4, minW: 20 }}
                    style={{ backgroundColor: colorNameKycs[colorNumberKyc] }}>
                    <KYC
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "CompositeScoring":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 6, minH: 6, minW: 20 }}
                    style={{ backgroundColor: colorNameComposites[colorNumberComposite] }}>
                    <CompositeScoring
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "News":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 6, minH: 6, minW: 30 }}
                    style={{ backgroundColor: colorNameNewss[colorNumberNews] }}>
                    <News
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "PredictiveAnalytics":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 8, minH: 8, minW: 20 }}
                    style={{ backgroundColor: colorNamePredictives[colorNumberPredictive] }}>
                    <PredictiveAnalytics
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "RiskCompositeIndex":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 4, minH: 4, minW: 28 }}
                    style={{ backgroundColor: colorNameRisks[colorNumberRisk] }}>
                    <RiskCompositeIndex
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
              case "WebAnalytics":
                return (
                  <div key={item.i} className="grid-item" data-grid={{ x: 0, y: 0, w: 30, h: 6, minH: 6, minW: 28 }}
                    style={{ backgroundColor: colorNameWebs[colorNumberWeb] }}>
                    <WebAnalytics
                      name={item.name}
                      renderId={renderId}
                      onOkRemove={onOkRemove}
                      index={item.i}
                    />
                  </div>
                )
            }
          })}
        </ResponsiveGridLayout>
      </div >
    )
  }
}
const stateToProps = (props) => {
  const {
    colorNumberProfile,
    colorNameProfile,
    colorNumberComposite,
    colorNameComposite,
    colorNumberFinancial,
    colorNameFinancial,
    colorNumberKyc,
    colorNameKyc,
    colorNumberNews,
    colorNameNews,
    colorNumberPeerCompos,
    colorNamePeerCompos,
    colorNumberPredictive,
    colorNamePredictive,
    colorNumberRisk,
    colorNameRisk,
    colorNumberWeb,
    colorNameWeb
  } = props
  return {
    colorNumberProfile, colorNameProfile,
    colorNumberComposite,
    colorNameComposite,
    colorNumberFinancial,
    colorNameFinancial,
    colorNumberKyc,
    colorNameKyc,
    colorNumberNews,
    colorNameNews,
    colorNumberPeerCompos,
    colorNamePeerCompos,
    colorNumberPredictive,
    colorNamePredictive,
    colorNumberRisk,
    colorNameRisk,
    colorNumberWeb,
    colorNameWeb
  }
}
const TargetBox = DropTarget(
  ItemTypes.BOX,
  {
    drop(props, monitor) {
      props.name(monitor.getItem())
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    getDropResult: monitor.getDropResult(),
  }),
)(TargetBoxRaw)

const StatefulTargetBox = props => {
  const [menuData, setMenuData] = useState([])
  const names = useCallback((name) => {
    setMenuData(name, [])
  })
  const {
    colorNumberProfile,
    colorNameProfile,
    colorNumberComposite,
    colorNameComposite,
    colorNumberFinancial,
    colorNameFinancial,
    colorNumberKyc,
    colorNameKyc,
    colorNumberNews,
    colorNameNews,
    colorNumberPeerCompos,
    colorNamePeerCompos,
    colorNumberPredictive,
    colorNamePredictive,
    colorNumberRisk,
    colorNameRisk,
    colorNumberWeb,
    colorNameWeb
  } = props
  return (
    <TargetBox
      {...props}
      menuData={menuData}
      name={names}
      colorNumberProfile={colorNumberProfile}
      colorNameProfile={colorNameProfile}
      colorNumberComposite={colorNumberComposite}
      colorNameComposite={colorNameComposite}
      colorNumberFinancial={colorNumberFinancial}
      colorNameFinancial={colorNameFinancial}
      colorNumberKyc={colorNumberKyc}
      colorNameKyc={colorNameKyc}
      colorNumberNews={colorNumberNews}
      colorNameNews={colorNameNews}
      colorNumberPeerCompos={colorNumberPeerCompos}
      colorNamePeerCompos={colorNamePeerCompos}
      colorNumberPredictive={colorNumberPredictive}
      colorNamePredictive={colorNamePredictive}
      colorNumberRisk={colorNumberRisk}
      colorNameRisk={colorNameRisk}
      colorNumberWeb={colorNumberWeb}
      colorNameWeb={colorNameWeb}
    />
  )
}

export default connect(stateToProps)(StatefulTargetBox);