import { Component } from "react";


export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let sp = this.props.speed;
    this.spe = this.props.speed;

    this.state = {
      speed: 100,
      engoine: 3.7,
      name: ''
    };

  }

  btnAddSpeed = () => {
    //this.state.speed = 70; //ERR!

    //this.setState({ speed: 400 });
    this.setState(prevS => ({ speed: prevS.speed + 10 }));
    console.log(this.state.speed);
    this.setState({ engoine: 5 });
  }

  chgTxtName = (e) => {
    this.setState({ name: e.target.value.toUpperCase() });
  }

  componentDidMount() {
    console.log('didi mount');
    //go 2 DB 
    this.setState({ engoine: 7 });
  }

  componentWillUnmount() {
    console.log('will unmount!');  
  }

  render() {

    console.log('render');
    console.log(this.state.speed);
    return (
      <div>
        <h2>Car</h2>
        model = {this.props.model} <br />
        props.speed = {this.props.speed} <br />
        <button onClick={this.btnAddSpeed} >Add Speed</button> <br />
        state.speed = {this.state.speed} <br />
        engine = {this.state.engoine} <br />
        name: <input type="text" onChange={this.chgTxtName}
          value={this.state.name} />
        name = {this.state.name}
      </div>
    );
  }
}