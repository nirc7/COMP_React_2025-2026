import { Component } from "react";


export default class CCCar extends Component {
    constructor(props) {
        super(props);

        let num = 7;
        this.number = 8;

        this.state = {
            engine: 3,
            color: 'red'
        };
    }

    btnAddEngine = () => {
        this.setState(prevS => ({ engine: prevS.engine + 1 }));
        //this.setState({engine:7});
    }

    render() {
        return (
            <div>
                <div>Car</div>
                model = {this.props.model}<br />
                speed = {this.props.speed} <br />
                number = {this.number} <br />
                engine = {this.state.engine} <br />
                <button onClick={this.btnAddEngine}>Add Engine</button>
            </div>
        );
    }
}