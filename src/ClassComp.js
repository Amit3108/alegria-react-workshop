import React, {Component} from "react";

class ClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), full_name: "Prafulkumar Aruparayil"};
        }

    render () {

        return (
            <>
            <h2>Hello World using Class Component</h2>
            <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            <h4>Full name is: {this.state.full_name}</h4>
            </>
        )
    }
}
export default ClassComp;