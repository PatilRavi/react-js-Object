import React, { Component } from "react";
import "./style.css";
import Child from "./Child";

class App extends Component {
  state = {
    homeTeamClone: {
      "3a21b0a-1223-46-5abe-67b653be5704": {
        id: "3a21b0a-1223-46-5abe-67b653be5704",
        memberName: "Adam"
      },
      "3a21b0a-1223-46-5abe-67b653be5705": {
        id: "3a21b0a-1223-46-5abe-67b653be5705",
        memberName: "Chris"
      },
      "3a21b0a-1223-46-5abe-67b653be5706": {
        id: "3a21b0a-1223-46-5abe-67b653be5706",
        memberName: "Martin"
      }
    }
  };
  render() {
    return (
      <div className="App">
        <Child team={this.state.homeTeamClone} />
      </div>
    );
  }
}
export default App;
