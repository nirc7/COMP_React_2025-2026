import React, { Component } from 'react'

export default class CCInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
    };

  }

  chgNum1 = (e) => {
    this.setState({ num1: Number(e.target.value) });
  }

  chgNum2 = (e) => {
    this.setState({ num2: Number(e.target.value) });
  }

  btnAddNum = () => {
    this.props.sendRes( this.state.num1 +  this.state.num2);
  }

  render() {
    return (
      <div>
        CCInputs <br />
        NUM1: <input type="text" onChange={this.chgNum1} /> <br />
        NUM2: <input type="text" onChange={this.chgNum2} /> <br /><br /> <br />
        <button onClick={this.btnAddNum}>+</button> <br />
      </div>
    )
  }
}
