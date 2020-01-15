import React from "react";
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Menu, Icon } from 'antd'
import SourceMenu from './SourceMenu'
import { connect } from "react-redux";
import Component from './Component'

const { SubMenu, Item } = Menu;

class Index extends React.Component {
  render() {
    var boxs = [
      { i: '0', name: 'Profile', backgroundColor: "gray" },
      { i: '1', name: 'FinancialMetrics', backgroundColor: "#15181B" },
      { i: '2', name: 'PeerComps', backgroundColor: "#15181B" },
      { i: '3', name: 'KYC', backgroundColor: "#15181B" },
      { i: '4', name: 'CompositeScoring', backgroundColor: "#15181B" },
      { i: '5', name: 'News', backgroundColor: "#15181B" },
      { i: '6', name: 'PredictiveAnalytics', backgroundColor: "#15181B" },
      { i: '7', name: 'RiskCompositeIndex', backgroundColor: "#15181B" },
      { i: '8', name: 'WebAnalytics', backgroundColor: "#15181B" }
    ]
    return (
      <DragDropContextProvider backend={HTML5Backend} >
        <Menu
          mode="inline"
          className="source-menu"
        >
          <SubMenu
            className="bg-menu"
            title={
              <span>
                <Icon type="unordered-list" />
              </span>
            }
          >
            {
              boxs.map((item, index) => {
                return (
                  <Item key={index} style={{ width: 300, backgroundColor: "transparent" }}>
                    <SourceMenu
                      id={item.id}
                      index={index}
                      key={index}
                      name={item.name}
                      backgroundColor={item.backgroundColor}
                      dataGrid = {item.dataGrid}
                    />
                  </Item>
                )
              })
            }
          </SubMenu>
        </Menu>
        <Component />
      </DragDropContextProvider >
    )
  }
}

const mapDispatchToProps = {};
export default connect(
  null,
  mapDispatchToProps
)(Index);