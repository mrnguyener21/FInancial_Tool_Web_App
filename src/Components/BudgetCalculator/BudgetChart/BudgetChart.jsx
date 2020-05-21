/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import {Doughnut} from 'react-chartjs-2';
// import styles from './Chart.module.css'

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
        <button onClick={()=>{
            totalBudget === 100?(
               setClick(true) 
            ) : alert(`current budget is ${totalBudget}. Wants, needs and savings must add up to be 100`)
        }}
        >CALCULATE BUDGET</button>
        {click?(
            <Doughnut data={data}/>
        ):console.log('no click')}
        </>
    )
}
    
    export default BudgetChart;
