import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";

class App extends React.Component {
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
        var newTimer = this.state.timer + num;
        newTimer = (newTimer < 0)? 0 : newTimer;
        this.setState({
            timer: newTimer,
            timerString: timeToString(newTimer),
            timerSet: newTimer
        });
    }

    startTimer() {
        this.state.myTimer = setInterval( () => {
            var newTime = this.state.timer - 1;
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

class Timer extends React.Component {
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

class StartTimer extends React.Component {
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

class ResetTimer extends React.Component {
    handleClick(e) {
        this.props.reset();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Reset</button>
        )
    }
}

function timeToString(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    return minutes + ":" + ("0" + seconds).slice(-2);
}

let timer = document.getElementById("app");
ReactDOM.render(<App />, timer);
