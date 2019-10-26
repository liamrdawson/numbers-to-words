import React, { Component } from 'react'

export class NumbersInput extends Component {

    render() {
        return (
            <form className="input-form">
                <div className="first-number">
                    <h3>Enter your first number here:</h3>
                    <input type="number" name="first number"/>
                </div>
                <div className="second-number">
                    <h3>Enter your second number here:</h3>
                    <input type="number" name="second number"/>
                </div>
                <button>
                    Submit
                </button>
            </form>
        )
    }
}

export default NumbersInput
