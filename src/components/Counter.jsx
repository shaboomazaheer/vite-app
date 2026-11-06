import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state={ count : 0}
    }

    //Life cycle methods in class component

    componentDidMount(){
        console.log('Component created.....');
        
        this.timer = setInterval(()=>{
            console.log("Timer Running...");
        },2000)
     }

    componentDidUpdate(){
        console.log('component updated');
    }

    componentWillUnmount(){
        console.log('component unmount');
        //cleanup timer
        clearInterval(this.timer)
    }

    increment =()=>{
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement =()=>{
        this.setState({
            count : this.state.count == 0 ? 0 : this.state.count - 1
        })
    }

    reset =()=>{
        this.setState({
            // count : this.state.count = 0
            count : 0
        })
    }

    render(){
        return(
            <>
            <h1>Counter {this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            </>
        )
    }
}

export default Counter;