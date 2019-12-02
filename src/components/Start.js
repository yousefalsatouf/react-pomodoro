import React, { Component } from "react";


class StartTimer extends Component {
    handleClick(e) {
        if (this.props.label === "Start") {
            this.props.startTimer();
        } else {
            this.props.stopTimer();
        }

    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.props.label}</button>
        );
    }
}

export default StartTimer;