import React, { Component } from "react";
import CountUp, { start } from "react-countup";

class Score extends Component {
  state = {
    percentage: 97,
    numcolor: "black"
  };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  changeColor() {
    let num = this.state.percentage;
    if (num < 70) {
      this.setState({ numcolor: "salmon" });
    } else if (num > 70 && num < 95) {
      this.setState({ numcolor: "lightgreen" });
    } else {
      this.setState({ numcolor: "gold" });
    }
  }
  render() {
    return (
      <div
        style={{
          fontSize: "600%",
          fontFamily: "'Ultra', serif",
          color: this.state.numcolor
        }}
      >
        <CountUp
          start={0}
          end={this.state.percentage}
          duration={4}
          delay={0}
          suffix="%"
          onEnd={() => this.changeColor()}
        >
          {({ countUpRef }) => (this.myRef = countUpRef)} => (
          <div>
            <h1 className="ml-5" ref={this.myRef} />
          </div>
          )}
        </CountUp>
      </div>
    );
  }
}

export default Score;
