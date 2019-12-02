import React, { Component } from "react";

class Timer extends Component {
    addTime() {
        this.props.adjustMinutes(300);
    }

    subtractTime() {
        this.props.adjustMinutes(-300);
    }

    render() {
        return (
            <div>
                <div className="inline-div">
                    <h2>{this.props.timer}</h2>
                </div>
                <div className="inline-div">
                    <button className="adjustment-btn" onClick={this.addTime.bind(this)}>+</button>
                    <button className="adjustment-btn" onClick={this.subtractTime.bind(this)}>-</button>
                </div>
            </div>
        )
    }
}

export default Timer;