import React,{useState} from 'react';
import {Typography, Slider} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
          "#69F0AE",
          "#00E676",
          "#00C853",
        // '#CC99FF'
        ],
        hoverBackgroundColor: [
          "#69F0AE",
          "#00E676",
          "#00C853",
        // '#CC99FF'
        ]
    }]
};

const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "rgb(3, 141, 74)",
      },
      track: {
        color: 'rgb(3, 209, 109)'
      },
      rail: {
        color: 'black'
      }
    }
}
});

  return (
    <>
      <div className={styles.sliderContainer}>
        <ThemeProvider theme={muiTheme}>
          <Slider
            className={styles.slider}
            value={rentBudget}
            step={1}
            min={0}
            max={100}
            valueLabelDisplay="auto"
            onChange={(e,value)=>setRentBudget(value)}
          />
        </ThemeProvider>
        <Typography id="discrete-slider-small-steps" gutterBottom>
          *Percentage of Income Taxed* 
        </Typography>
      </div>
      <div className={styles.buttonContainer}>
       <button className={styles.button} onClick={()=> salary > 0 && tax > 0?setClick(true):console.log(salary, tax)} >CALCULATE BUDGET</button>
      </div>
      {click?(<Doughnut height={100} data={data}/>):console.log(click)}    
    </>
  )
}
export default RentChart;