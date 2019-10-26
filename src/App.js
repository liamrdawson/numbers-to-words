import React from 'react';
import './scss/App.scss';

import Header from './components/Header';
import NumbersInput from './components/numbers/NumbersInput';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NumbersInput />
    </React.Fragment>
  );
}

export default App;
