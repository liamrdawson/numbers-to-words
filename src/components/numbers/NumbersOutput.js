import React, { Component } from 'react'

export class NumbersOutput extends Component {

    numbers = this.props.numbers;
    numbersRange = (numbers) => {
        if (numbers.highNumber === 0) {
            return 100000000 - numbers.lowNumber;
        } else {
            return numbers.highNumber - numbers.lowNumber;
        }
    }

    printNumbers = (numbers, numbersRange) => {
        for(numbers.lowNumber; numbers.lowNumber < numbersRange; numbers.lowNumber++) {

        }
    }

    render() {

        return (
            <div className="output">
                <h3>
                    Output goes here...

                </h3>
            </div>
        )
    }
}

export default NumbersOutput
