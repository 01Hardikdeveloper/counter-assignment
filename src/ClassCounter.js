import React, {Component} from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increment = () => {
        this.setState({count: this.state.count + 1});
    };
    decrement = () => {
        this.setState({count: this.state.count - 1});
    };
   render() {
    return (
         <div className="counter-box">
        <h3>Class Component</h3>
         <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        </div>
    );
    }
}
export default ClassCounter;