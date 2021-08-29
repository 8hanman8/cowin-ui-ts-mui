import { Typography } from "@material-ui/core";
import React, { Component } from "react";

interface TimerState {
  time: Date;
  interval?: any;
}

interface TimerProps {
  format?: string;
}
class Timer extends Component<TimerProps, TimerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  render() {
    return (
      <>
        <Typography component="span">
          {this.state.time.toLocaleTimeString()}
        </Typography>
      </>
    );
  }
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
    this.setState({ interval: interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
}

export default Timer;
