import React, { Component } from 'react';

export default class CCPerson extends Component {
  constructor(props) {
    super(props);
    // 49<--go to fetch age form db
    this.state = {
      age: 0,
      nums: [1, 2, 3, 4],
      names: ['aviu', 'ben', 'charlie', 'dora']
    };

    this.txtInput1;
    this.textInput2 = React.createRef();
  }

  componentDidMount() {
    // 49<--go to fetch age form db
    console.log('did mount!');
    this.setState({ age: 50 });
  }

  componentWillUnmount() {
    console.log('will unmount!');
  }

  TextChanged = (e) => {
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    })
  }

  render() {
    console.log('render', this.state.age);

    let numsStr = this.state.nums.map(num =>
      <a key={num}
        href="#"
        className="list-group-item list-group-item-action">item{num}</a>
    );

    let namesStr = this.state.names.map((name, ind) =>
      <a key={ind}
        href="#"
        className="list-group-item list-group-item-action">{ind} - item {name}</a>
    );

    return (
      <div style={{
        margin: 15,
        padding: 10,
        border: 'solid green 2px',
        borderRadius: 10
      }}>
        <h3>Person</h3>
        TXT1:<input
          type="text"
          ref={(input) => { this.txtInput1 = input }}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt1}
        <hr />
        TXT2:<input type="text"
          ref={this.textInput2}
          onChange={this.TextChanged} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt2} <br />

        age = {this.state.age} <br />
        <button
          onClick={() => {
            console.log(this.state.age);
            this.setState(prevS => ({ age: prevS.age + 1 }), () => {
              console.log('new age = ', this.state.age);
              console.log('go 2 db and save new age');
            });
            console.log(this.state.age);
          }}
          className="btn btn-outline-success"
        >Add Age</button> <br /> <br />


        <div className="list-group">
          {numsStr}
        </div>

        <div className="list-group">
          {namesStr}
        </div>
      </div>
    )
  }
}
