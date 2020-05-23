import React,{useState} from 'react';
import {Typography, Slider} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2';

import styles from './RentChart.module.css';

const RentChart = ({monthlyIncome, monthlyTax, salary, tax}) => {
  const [rentBudget, setRentBudget] = useState(30);
  const [click, setClick] = useState(false)

  const rent = parseInt(monthlyIncome * (rentBudget/100))
  const monthlyLeftoverIncome = monthlyIncome - rent;

  const data =  {
    labels: [
        'Cash',
        'Rent',
        'Tax',
    ],
    datasets: [{
        data: [monthlyLeftoverIncome, rent, monthlyTax],
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        // '#CC99FF'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        // '#CC99FF'
        ]
    }]
};
  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider
          value={rentBudget}
          step={1}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChange={(e,value)=>setRentBudget(value)}
        />
        <Typography id="discrete-slider-small-steps" gutterBottom>
          Percentage of Monthly Income Going Towards Rent *Generally recommendation is up to 30%* *numbers rounded to nearest whole dollar*
        </Typography>
      </div>
      <div className={styles.buttonContainer}>
       <button className={styles.button} onClick={()=> salary > 0 && tax > 0?setClick(true):console.log(salary, tax)} >CALCULATE BUDGET</button>
      </div>
      {click?(<Doughnut height={90} data={data}/>):console.log(click)}    
    </>
  )
}
export default RentChart;