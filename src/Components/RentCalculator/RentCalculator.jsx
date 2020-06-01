import React, {useState} from 'react';
import RentChart from './RentChart/RentChart'
import styles from './RentCalculator.module.css'

const RentCalculator = ({handleClose, rent}) => {
    const [salary, setSalary] = useState('');
    const [tax, settax] = useState('')
  
    const taxPercentage = tax/100;
    const netIncome = salary * (1-(taxPercentage))
    const monthlyIncome = parseInt((netIncome/12).toFixed(2));
    const monthlyTax = (salary * taxPercentage)/12
  
    return (
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={handleClose}>X</button>
        </div>
        <div className={styles.inputContainer}>
          <input className={styles.input} type='text' placeholder="Enter Earnings Per Year" value={salary} onChange={(e) => setSalary(e.target.value)}/>
          <input className={styles.input} type='text' placeholder='Enter Tax %'value={tax} onChange={(e) => settax(e.target.value)} />
        </div>
        <RentChart monthlyIncome={monthlyIncome} monthlyTax={monthlyTax} salary={salary} tax={tax} />
      </div>
    )
}

export default RentCalculator;