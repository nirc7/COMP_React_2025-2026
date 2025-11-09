import { Component } from "react";
import CCChild from "./CCChild";

export default class CCParent extends Component {

  getData = (data) => {
    console.log('data=', data);
  }

  render() {
    return (
      <div>
        Parent
        <CCChild  sendData={this.getData} />
      </div>
    );
  }
}