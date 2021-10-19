import React, {Component} from 'react';

import "./Multiply.css"
class Multiply extends Component {

    constructor(props)
    {
        super(props);
        this.state = {value : 1};

        this.multiplyByOne = () => this.setState({value : 5 * 1});
        this.multiplyByTwo = () => this.setState({value : 5 * 2});
        this.multiplyByThree = () => this.setState({value : 5 * 3});
        this. multiplyByFour = () => this.setState({value : 5 * 4});
        this.multiplyByFive = () => this.setState({value : 5 * 5});
    
    }



    render()
    {
        return(
        <div>
            <p> {this.state.value} </p>
            <div className="btns">
                <button onClick={this.multiplyByOne}> 5 * 1 </button>
                <button onClick={this.multiplyByTwo}> 5 * 2 </button>
                <button onClick={this.multiplyByThree}> 5 * 3 </button>
                <button onClick={this.multiplyByFour}> 5 * 4 </button>
                <button onClick={this.multiplyByFive}> 5 * 5 </button>
            </div>


        </div>
        );
    
    }


}

export default Multiply;