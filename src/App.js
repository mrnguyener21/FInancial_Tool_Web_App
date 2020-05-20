import React from 'react';
import {BudgetCalculator, CompoundInterestCalculator, RentCalculator} from './Components';

const App = ()=> {
  return (
    <div className="App">
     <h1>APP</h1>
     <BudgetCalculator/>
     <CompoundInterestCalculator/>
     <RentCalculator/>
    </div>
  );
}

export default App;
