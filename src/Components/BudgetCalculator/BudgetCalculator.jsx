import React, {useState} from 'react';
import BudgetChart from './BudgetChart/BudgetChart';
import styles from './BudgetCalculator.module.css';

import Zoom from '@material-ui/core/Zoom';

const BudgetCalculator = ({ handleClose }) => {
    const [salary, setSalary] = useState('');
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
        <Zoom in='yes'>
            <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleClose}>X</button>
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type='text' placeholder="INCOME" value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    <input className={styles.input} type='text' placeholder='TAX' value={taxRate} onChange={(e)=> setTaxRate(e.target.value) } />
                    <input className={styles.input} type='text' placeholder='FUN' value={wantsBudget} onChange={(e)=> setWantsBudget(e.target.value)}/>
                    <input className={styles.input} type='text 'placeholder='NEEDS' value={needsBudget} onChange={(e)=> setNeedsBudget(e.target.value)} />
                    <input className={styles.input} type='text 'placeholder='SAVING' value={savingsBudget} onChange={(e)=> setSavingsBudget(e.target.value)} 
                    />
                </div>
                <BudgetChart salary={parseInt(salary)} totalBudget={totalBudget}wantsFormula={wantsFormula} needsFormula={needsFormula} savingsFormula={savingsFormula} taxFormula={taxFormula}/>
            </div>
        </Zoom>
    )
}

export default BudgetCalculator;