import React from "react";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="header-search">
          <div className="container-fluid">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header-title">
          <div className="container-fluid">
            <span>OVERVIEW</span>
            <span className="float-right text-muted">POWERED BY <img src="/static/img/AMPLYFI_white.png"/></span>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
