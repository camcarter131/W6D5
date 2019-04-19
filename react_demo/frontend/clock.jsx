

class Clock extends React.Component{
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

  render () {
    <h3>{this.state.date}</h3>
  }
}

export default Clock;