import React, { Component } from 'react';

class ResetTimer extends Component {
    handleClick(e) {
        this.props.reset();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Reset</button>
        )
    }
}

export default ResetTimer;