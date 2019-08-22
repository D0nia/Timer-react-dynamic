import React, { Component } from 'react';
import './App.css';



const timerMachine=({x}) =>{
   var milliseconds = parseInt((x % 1000) / 100),
   seconds = Math.floor((x / 1000) % 60),
   minutes = Math.floor((x / (1000 * 60)) % 60),
   hours = Math.floor((x / 1000 * 60 * 60) % 24 );
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = ( seconds < 10) ? "0" + seconds : seconds;
   return String(hours).padStart(2, '0') +
   ':' + String(minutes).padStart(2, '0') +
   ':' + String(seconds).padStart(2, '0');
}

class Timer extends Component {
  render() { 
    const {x}=this.props
    return ( 
      <div>
        <div  >
        <h3>{ timerMachine({x}) } </h3>
        <h4> hour minute second</h4>
        </div>
      </div>
     );
  }
}
 
export default Timer;
;