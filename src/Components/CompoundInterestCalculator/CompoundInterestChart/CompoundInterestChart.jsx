import React,{useState} from 'react';
import {Line} from 'react-chartjs-2';
import styles from './CompoundInterestChart.module.css'


const CompoundInterestChart = ({totalWithInterest, totalWithCompoundInterst, principal, years, interest, compoundRate, arrayOfYears}) => {
  const [click, setClick] =useState(false);

  const data = {
      labels: arrayOfYears,// can work dynamically
      datasets: [
        {
          label: 'Total Amount With Interest',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',//refers to the color of the point
          borderColor: 'rgba(75,192,192,1)',// refers to line border
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0)',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totalWithInterest
        },
        {
          label: 'Total Amount With Comound Interest',
          fill: false,
          lineTension: 0.1,
          backgroundColor:'#FFCE56',//refers to the color of the point
          borderColor: '#FFCE56',// refers to line border
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0,0,0)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: totalWithCompoundInterst
        },
      ]
    };
  
    return(
      <>
        <div className={styles.container}>
          <button onClick={()=>{principal > 0 && years > 0 && interest > 0 && compoundRate > 0 ?(setClick(true) ) : console.log('fail')}}>CALCULATE</button>
          {click?(
              <Line height={150} data={data}/>
          ):console.log('no click')}
        </div>
      </>
    )
}

export default CompoundInterestChart;