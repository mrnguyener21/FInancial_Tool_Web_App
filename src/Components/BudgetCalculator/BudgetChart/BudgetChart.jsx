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
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#CC99FF'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#CC99FF'
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
            <Doughnut height={100} data={data}/>
        ):console.log('no click')}
        </div>
        </>
    )
}
    
    export default BudgetChart;
