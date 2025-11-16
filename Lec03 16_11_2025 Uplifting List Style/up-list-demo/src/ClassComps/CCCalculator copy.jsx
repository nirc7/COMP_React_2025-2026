import React, { Component } from 'react'

export default class CCCalculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0
    };
  }

  btnAddNum = () => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  chgNum2 = (e) => {
    this.setState({ num2: Number(e.target.value) });
  }

  render() {
    return (
      <div>
        NUM1: <input type="text" onChange={this.chgNum1} /> {this.state.num1} <br />
        NUM2: <input type="text" onChange={this.chgNum2} /> {this.state.num2} <br /><br /> <br />
        <button onClick={this.btnAddNum}>+</button> <br />
        {this.state.result}
      </div>
    )
  }
}
