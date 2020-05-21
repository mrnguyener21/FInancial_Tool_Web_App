import React, {useState} from 'react';
import BudgetChart from './BudgetChart/BudgetChart';


const BudgetCalculator = () => {
    const [salary, Setsalary] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [wantsBudget, setWantsBudget] = useState('');
    const [needsBudget, setNeedsBudget] = useState('');
    const [savingsBudget, setSavingsBudget] = useState('');


    const taxFormula =  salary*(taxRate/100);
    const wantsFormula =  (salary - taxFormula)*(wantsBudget/100);
    const needsFormula =  (salary - taxFormula)*(needsBudget/100);
    const savingsFormula =  (salary - taxFormula)*(savingsBudget/100);

    const totalBudget = parseInt(wantsBudget) + parseInt(needsBudget) + parseInt(savingsBudget);

    return (
        <div >
        <input type='text' placeholder="Enter Earnings Per Year" value={salary} onChange={(e) => Setsalary(e.target.value)}/>
        <input type='text' placeholder='taxrate(this is a % value)' value={taxRate} onChange={(e)=> setTaxRate(e.target.value) } />
        <input type='text' placeholder='Wants(this is a % value)' value={wantsBudget} onChange={(e)=> setWantsBudget(e.target.value)}/>
        <input type='text 'placeholder='Needs(this is a % value)' value={needsBudget} onChange={(e)=> setNeedsBudget(e.target.value)} />
        <input type='text 'placeholder='Savings(this is a % value)' value={savingsBudget} onChange={(e)=> setSavingsBudget(e.target.value)} 
        />
        <BudgetChart salary={parseInt(salary)} totalBudget={totalBudget}wantsFormula={wantsFormula} needsFormula={needsFormula} savingsFormula={savingsFormula} taxFormula={taxFormula}/>
        </div>
    )
}

export default BudgetCalculator;