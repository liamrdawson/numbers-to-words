import React, {Component} from 'react';
import './scss/App.scss';

import Header from './components/Header';
import NumbersInput from './components/numbers/NumbersInput';
import NumbersOutput from './components/numbers/NumbersOutput';

class App extends Component {

  state = {
      numbers: {
        lowNumber: 0,
        highNumber: 0
      }
  }

  numbersToWords = () => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const convMillions = (num) => {
      if (num >= 1000000) {
        return `${convMillions(Math.floor(num / 1000000))} million ${convThousands(num % 1000000)}`;
      } else {
        return convThousands(num);
      }
    }

    const convThousands = (num) => {
      if (num >= 1000) {
        return `${convHundreds(Math.floor(num / 1000))}  thousand  ${convHundreds(num % 1000)}`;
      } else {
        return convHundreds(num);
      }
    }
    
    const convHundreds = (num) => {
      if (num > 99) {
        return `${ones[Math.floor(num / 100)]} hundred ${convTens(num % 100)}`;
      } else {
        return tens(num);
      }
    }
    
    const convTens = (num) => {
      if (num < 10) return ones[num];
      else if (num >= 10 && num < 20) return teens[num - 10];
      else {
        return `${tens[Math.floor(num / 10)]} ${ones[num % 10]}`;
      }
    }
    
    const converter = (num) => {
      if (this.state.highNumber === 0) {
        if (num == 0) return `zero`;
        else return convMillions(num);
      }
    }

  }

  onSubmit = () => {
    this.setState({
      numbers: {

      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <NumbersInput numbersToWords={this.numbersToWords} onSubmit={this.onSubmit}/>
        <NumbersOutput numbers={this.state.numbers} converter={this.converter}/>
      </React.Fragment>
    );
  }
}

export default App;
