import React, {useState} from 'react';
import CompoundInterestChart from './CompoundInterestChart/CompoundInterestChart';
import styles from './CompoundInterestCalculator.module.css'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const CompoundInterestCalculator = () => {
  const [initialInvestment, setInitialInvestment]= useState('');
  const [yearsInvested,setYearsInvested] =useState(''); 
  const [interestRate, setInterestRate] =useState('');
  const [compoundValue, setCompoundValue] =useState('');
  // const [compoundValue, setCompoundValue] = useState({''});

  
  //conversion 
  const principal = parseInt(initialInvestment);
  const interest = (interestRate/100);
  const years = parseInt(yearsInvested)
  const compoundRate = parseInt(compoundValue);

  //simple interest
  const totalWithInterest = [principal];
  for (let i = 1; i < years+1; i++) {
    totalWithInterest.push(principal+(principal*interest)*i)
  }

  //compound interest
  const totalWithCompoundInterst = [principal];
  const arrayOfYears =[0]
  for (let i = 1; i < years+1; i++) {
    const a = interest / compoundRate;
    const b = 1 + a;
    const c = compoundRate * i;
    const d = Math.pow(b, c);
     totalWithCompoundInterst.push((principal * d).toFixed(2));
     arrayOfYears.push(i);
    
  }

  const handleChange = (event) => {
    const name = event.target.name;
    setCompoundValue({
      ...compoundValue,
      [name]: event.target.value,
    });
  };  

  return(
    <div className={styles.container}>
      <div className={styles.inputContainer}>
          <p>STEP 1 INITIAL INVESTMENT</p>
          <input className={styles.input} type={'text'} placeholder={'Inital Investment*'} value={initialInvestment}  onChange={(e)=>setInitialInvestment(e.target.value)} />
            <p>STEP 2 CONTRIBUTE</p>
          <input className={styles.input} type={'text'} placeholder={'years Invested*'} value={yearsInvested}  onChange ={(e)=>setYearsInvested(e.target.value)} />
          <p>STEP 3 INTEREST RATE</p>
          <input className={styles.input} type={'text'} placeholder={'Interest Rate*'} value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
          <p>STEP 4 COMPOUND IT</p>
            {/* <FormControl className={styles.compoundRate}>
              <InputLabel>Compound Rate</InputLabel>
              <Select
                native
                value={compoundValue.rate}
                onChange={handleChange}
                name="rate"
              >
                <option value={1}>Annual</option>
                <option value={2}>Semi-Annual</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </Select>
            </FormControl> */}

            <select className={styles.input} type={'text'} placeholder={'Compound Rate*'} value={compoundValue} onChange={(e)=>setCompoundValue(e.target.value)}>
              <option className={styles.selectPlaceHolder} value="" disabled selected>Compound Rate*</option>
              <option value={1}>Annual</option>
              <option value={2}>Semi-Annual</option>
              <option value={4}>Quarterly</option>
              <option value={12}>Monthly</option>
            </select>
            <button onClick={()=> console.log(compoundValue)}>check</button>
        </div>
            <CompoundInterestChart 
              totalWithInterest={totalWithInterest} 
              totalWithCompoundInterst={totalWithCompoundInterst} 
              principal={principal} 
              years={years} 
              interest={interest} 
              compoundRate={compoundRate} 
              arrayOfYears={arrayOfYears} 
            />
      </div>
    )
  }


export default CompoundInterestCalculator;