import { Component } from 'react';

export default class Stam extends Component {
  constructor(props) {
    super(props);

    this.state = { num: 0 };
  }

  render() {

    console.log('render', this.state.num);

    return (
      <div>
        <button onClick={() =>
          this.setState({ num: 7 },
            () => console.log('after' + this.state.num))}
        >change state</button> <br />
        num = {this.state.num}
      </div>
    )
  }
}
