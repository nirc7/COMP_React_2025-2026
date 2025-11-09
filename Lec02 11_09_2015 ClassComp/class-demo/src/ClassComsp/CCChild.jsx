import React, { Component } from 'react'

export default class CCChild extends Component {

  btnSendD2P=()=>{
    this.props.sendData(7);
  }

  render() {
    return (
      <div>
        Child <br />
        <button onClick={this.btnSendD2P} >send Data to Parent</button>
      </div>
    )
  }
}
