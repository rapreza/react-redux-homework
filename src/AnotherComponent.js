import React from "react";
import { Button } from "antd";
// const axios = require("axios");
import { connect } from "react-redux";
// import axios from "axios";
import { addCounting, minCounting, mulCounting } from "./actions/counting";

/**
 * @todo
 * - Dibuat as Class
 * - Pemprosesan pengurangan dan pertambahan dipindahkan ke Another Component
 * - Ditambahkan perkalian didalamnya (dikalikan state = 5) as default;
 */

class AnotherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      multiply: 5
    };
  }

  handleAddNumber = () => {
    this.props.dispatch(addCounting(this.props.countingData.data))
  };

  handleSubtractNumber = () => {
    this.props.dispatch(minCounting(this.props.countingData.data))
  };

  handleMultiplyNumber = () => {
    this.props.dispatch(mulCounting(this.props.countingData.data))
  };

  render() {
    //console.log("props another component", this.props.countingData.data);
    return (
      <div>
        <Button onClick={this.handleAddNumber} 
          className="coba" 
          type="primary"
        >
          Tambah
        </Button>
        <span> </span>
        <Button
          onClick={this.handleSubtractNumber}
          className="coba"
          type="primary"
        >
          Kurang
        </Button>
        <span> </span>
        <Button
          onClick={this.handleMultiplyNumber}
          className="coba"
          type="primary"
        >
          multiply by 5
        </Button>
        <br></br>
        <span>this.props.countingData.data = {this.props.countingData.data}</span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps anotherstate state = ", state.calculateNum.data);
  console.log(" ================================================ ");
  return {
    countingData: state.calculateNum
  };
}

export default connect(mapStateToProps)(AnotherComponent);
