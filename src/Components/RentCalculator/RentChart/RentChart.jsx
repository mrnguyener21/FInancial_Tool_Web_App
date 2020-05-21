import React,{useState} from 'react';
import {Typography, Slider} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2';

const RentChart = ({monthlyIncome, monthlyTax}) => {
  const [rentBudget, setRentBudget] = useState(30);
  const [click, setClick] = useState(false)

  const rent = parseInt(monthlyIncome * (rentBudget/100))
  const monthlyLeftoverIncome = monthlyIncome - rent;

  const data =  {
    labels: [
        'monthlyLeftoverIncome',
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
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Percentage of Monthly Income Going Towards Rent *Generally recommendation is up to 30%* *numbers rounded to nearest whole dollar*
      </Typography>
      <Slider
        value={rentBudget}
        step={1}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        onChange={(e,value)=>setRentBudget(value)}
      />
      <button onClick={()=>setClick(true)} >CALCULATE BUDGET</button>
      {click?(<Doughnut data={data}/>):console.log('no click')}    
    </>
  )
}
export default RentChart;