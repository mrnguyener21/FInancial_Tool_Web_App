/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from './BudgetChart.module.css'

const BudgetChart = ({totalBudget, wantsFormula, needsFormula, savingsFormula, taxFormula}) => {
    const [click, setClick] = useState(false)
    const data =  {
        labels: [
            'Wants',
            'Needs',
            'Savings',
            'Tax',
        ],
        datasets: [{
            data: [wantsFormula, needsFormula, savingsFormula, taxFormula],
            backgroundColor: [
            '#B9F6CA',
            "#69F0AE",
            "#00E676",
            "#00C853",
            ],
            hoverBackgroundColor: [
            '#B9F6CA',
            "#69F0AE",
            "#00E676",
            "#00C853",
            // 'rgba(3, 209, 109,0.5)',
            // "rgba(2, 172, 89,0.5)",
            // "rgba(2, 116, 60,0.5)",
            // "rgba(1, 68, 36,0.5)",       
            ]
        }]
    };
    

    return (
        <>
        <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={()=>{
            totalBudget === 100?(
               setClick(true) 
            ) : alert(`current budget is ${totalBudget}. Wants, needs and savings must add up to be 100`)
        }}
        >CALCULATE BUDGET</button>
        </div>
        <div>

        {click?(
            <Doughnut height={170} data={data}/>
        ):console.log('no click')}
        </div>
        </>
    )
}
    
    export default BudgetChart;
