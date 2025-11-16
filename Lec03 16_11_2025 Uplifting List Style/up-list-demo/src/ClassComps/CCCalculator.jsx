import { Component } from 'react'
import FCInputs from '../FuncComps/FCInputs';
import FCRes from '../FuncComps/FCRes';
import CCInputs from './CCInputs';

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

  getRes = (res) => {
    console.log(res);
    this.setState({res});
  }

  render() {
    return (
      <div>
        <FCInputs sendRes={this.getRes} />
        <CCInputs sendRes={this.getRes} />
        <FCRes result={this.state.res} />
      </div>
    )
  }
}
