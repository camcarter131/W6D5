import React from 'react';

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export class Clock extends React.Component{
  constructor (props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  calculateTime ({date}) {
    let mins = date.getMinutes();
    let hours = date.getHours();
    let secs = date.getSeconds();
    
    hours %= 12;
    let zeroHours = hours < 10 ? 0 : "";
    let zeroMins = mins < 10 ? 0 : "";
    let zeroSecs = secs < 10 ? 0 : "";
    return `${zeroHours}${hours}:${zeroMins}${mins}:${zeroSecs}${secs}`;
  }

  calculateDate ({date}) {
    let dayOfWeek = DAYS[date.getDay()];
    let year = date.getFullYear();
    let month = MONTHS[date.getMonth()];
    let dayOfMonth = date.getDate();
    return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
  }

  render () {
    // debugger
    return (
      <div className="clock">
        <p className="time">{this.calculateTime(this.state)}</p>
        <p className="date">{this.calculateDate(this.state)}</p>
      </div>
  
  

    );
  }
}
