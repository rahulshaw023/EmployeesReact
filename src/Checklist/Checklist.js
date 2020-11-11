import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./Checklist.css";

class Checklist extends React.Component {
  constructor() {
    super();
    this.state = {
      checklist: ["Rahul Shaw", "Divyansh jha"],
      temp: ""
    };
  }

  inputHandler = e => {
    this.setState({
      temp: e.target.value
    });
  };

  addHandler = () => {
    if (
      !this.state.checklist.includes(this.state.temp) &&
      this.state.temp != ""
    ) {
      var a = this.state.checklist;
      a.push(this.state.temp);

      this.setState({
        checklist: a
      });
    }
  };

  delHandler = e => {
    console.log(e.target.value, "data");

    var c = this.state.checklist.filter(b => e.target.value !== b);

    console.log(c);

    this.setState({
      checklist: c
    });
  };

  render() {
    return (
      <>
        <center>
          <div>
            <input
              className="additem"
              type="text"
              placeholder="Item Name...."
              onChange={this.inputHandler}
            />
            <button className="addbutton" onClick={this.addHandler}>
              Add Employee
            </button>
          </div>
        </center>

        <ul className="list">
          {this.state.checklist.map((item, index) => (
            <Item item={item} index={index} del={this.delHandler} key={index} />
          ))}
        </ul>
      </>
    );
  }
}

export default Checklist;
