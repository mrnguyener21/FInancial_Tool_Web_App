import React, {useState} from 'react';
import {BudgetCalculator, CompoundInterestCalculator, RentCalculator, MoreInfo} from './Components';

import styles from './App.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const App = ()=> {
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
    <div className={styles.container}>
     <h1 className={styles.header}>Financial Tools</h1>

     <button type="button" onClick={openBudget} className={styles.button}>
        Budget Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={budget}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={budget}>
          <div className={styles.FadeIn}>
            <BudgetCalculator handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>

     <button type="button" onClick={openRent} className={styles.button}>
        Rent Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={rent}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={rent}>
          <div className={styles.FadeIn}>
            <RentCalculator handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>


     <button type="button" onClick={openCompoundInterest} className={styles.button}>
        Compound Interest Calculator
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
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
     <CompoundInterestCalculator handleClose={handleClose}/>
          </div>
        </Fade>
      </Modal>
      <MoreInfo/>
      <footer className={styles.footer}>
        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </footer>
    </div>
  );
}

export default App;
