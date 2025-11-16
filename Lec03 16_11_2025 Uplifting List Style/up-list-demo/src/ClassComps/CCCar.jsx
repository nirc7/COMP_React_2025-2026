
import React, { Component } from 'react'

export default class CCCar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            speed: this.props.speed
        };
    }

    btnAddSpeed = () => {
        //this.setState({ speed: 500 });
        console.log(this.state.speed);
        this.setState(prevS => ({ speed: prevS.speed + 10 }));
        console.log(this.state.speed);
    }

    render() {

        console.log(this.state.speed);

        return (
            <div>
                <h3>Car</h3>
                model = {this.props.model} <br />
                speed = {this.state.speed} <br />
                <button onClick={this.btnAddSpeed}>AddSpeed</button>
            </div>
        )
    }
}
