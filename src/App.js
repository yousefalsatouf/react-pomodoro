import React, { Component } from "react";
import Timer from "./components/Timer";
import StartTimer from "./components/Start";
import ResetTimer from "./components/Reset";


class App extends Component {
    constructor() {
        super();
        this.state = {

            timer: 1500,
            timerString: "25:00",
            timerSet: 1500,
            buttonLabel: "Start",
        };
    }

    adjustMinutes(num) {
        let newTimer = this.state.timer + num;
        newTimer = (newTimer < 0)? 0 : newTimer;
        this.setState({
            timer: newTimer,
            timerString: timeToString(newTimer),
            timerSet: newTimer
        });
    }

    startTimer() {
        this.state.myTimer = setInterval( () => {
            const newTime = this.state.timer - 1;
            this.setState({
                timer: newTime,
                timerString: timeToString(newTime)
            });
        }, 1000);
        this.setState({
            buttonLabel: "Stop"
        });
    }

    stopTimer() {
        clearInterval(this.state.myTimer);
        this.setState({
            buttonLabel: "Start"
        });
    }

    resetTimer() {
        clearInterval(this.state.myTimer);
        this.setState({
            buttonLabel: "Start",
            timer: this.state.timerSet,
            timerString: timeToString(this.state.timerSet)
        });
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Set Timer</h1>
                <Timer timer={this.state.timerString} adjustMinutes={this.adjustMinutes.bind(this)}/>
                <StartTimer startTimer={this.startTimer.bind(this)} label={this.state.buttonLabel} stopTimer={this.stopTimer.bind(this)}/>
                <br/>
                <ResetTimer reset={this.resetTimer.bind(this)}/>
            </div>
        );
    }
}

function timeToString(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + ":" + ("0" + seconds).slice(-2);
}

export default App;