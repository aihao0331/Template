import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div></div>);
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(mapStateToProps)(Home);