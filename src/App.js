import React from "react";
import AnotherComponent from "./AnotherComponent";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  handleUpdateNumber = (value) => {
    this.setState({ number: value });
  }

  render() {
    //console.log("this.state", this.state);
    return (
      <div className="App">
        <div style={{ marginTop: "16px" }}>
          {/*<h3>{this.state.number}</h3>*/}
          <AnotherComponent
            handleUpdateNumber={this.handleUpdateNumber}
            type="primary"
            buttonName="Tombol Self Distruction"
          />
          <br></br>
          <h4>Ini App Component</h4>
          <span>this.props.countingData.data = {this.props.countingData.data}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps app.js state = ", state);
  return {
    countingData: state.calculateNum
  };
}

export default connect(mapStateToProps)(App);
