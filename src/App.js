import React, {useState} from 'react';
import {BudgetCalculator, CompoundInterestCalculator, RentCalculator} from './Components';

// import styles from './App.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




const App = ()=> {
  //probably take useStyles and transition it to app.module.css later
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const [budget, setBudget] = useState(false);
  const [rent, setRent] = useState(false);
  const [compoundInterest, setCompoundInterest] = useState(false);

  const openBudget = () => {
    setBudget(true)
  
  };
  const openRent = () => {
    setRent(true)
  
  };
  const openCompoundInterest = () => {
    setCompoundInterest(true)  
  
  };
  const handleClose = () => {
    setBudget(false);
    setRent(false);
    setCompoundInterest(false);
  };

  return (
    <div className="App">
     <h1>APP</h1>

     <button type="button" onClick={openBudget}>
        Budget Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={budget}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={budget}>
          <div className={classes.paper}>
     <BudgetCalculator/>
          </div>
        </Fade>
      </Modal>
     <button type="button" onClick={openRent}>
        Rent Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={rent}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={rent}>
          <div className={classes.paper}>
     <RentCalculator/>
          </div>
        </Fade>
      </Modal>
     <button type="button" onClick={openCompoundInterest}>
        Compound Interest Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={compoundInterest}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={compoundInterest}>
          <div className={classes.paper}>
     <CompoundInterestCalculator/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default App;
