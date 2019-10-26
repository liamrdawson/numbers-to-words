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
        if (numbers.lowNumber === 0) {
            return 'zero';
        }  else {
            for(numbers.lowNumber; numbers.lowNumber < numbersRange; numbers.lowNumber++) {
                this.props.converter(numbers.lowNumber, numbers.highNumber);
            }
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
