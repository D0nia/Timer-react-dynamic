import React, { Component } from 'react';
import Timer from './timer'
import './App.css';


class Timing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TimeX:0
          } 
    }

    start =()=>{

        if (this.state.newinterval){
            return;
        }

       const interval = setInterval(
            ()=>{
                this.setState({
                  TimeX: this.state.TimeX+1000
                })
            },
            1000
        )
        this.setState({
           newinterval : interval
        })
    }
    reset =()=>{
        window.location.reload();{
            return ;
        }
    }
    render() {
         
        return (
            <div className="Timer">
            <Timer x={this.state.TimeX}/>
            <input type="button" value="Start"
             onClick={this.start}
             />
             <input type="button" value="Reset"
             onClick={this.reset}
             />
            </div>
         );
    }
}
 
export default Timing ;