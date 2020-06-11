/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { BudgetCalculator, CompoundInterestCalculator, RentCalculator, MoreInfo } from './Components';
import graph from './image/graph.png';
import budgetImage from './image/budgetImage.JPG'
import rentImage from './image/rentImage.JPG'
import compoundInterestImage from './image/compoundInterestImage.JPG'

import styles from './App.module.scss'

import Modal from '@material-ui/core/Modal';

const App = ()=> {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isRentOpen, setIsRentOpen] = useState(false);
  const [isCompoundInterestOpen, setIsCompoundInterestOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
      <h1 className={styles.header}>WELCOME TO VN FINANCIAL TOOLS  AVAILABLE TO HELP YOU</h1>
      <img className={styles.graph} src={graph}/>
      </div>
    <div className={styles.modalContainer}>
      <div className={styles.modalAndButton}>
        <img className={styles.image} id={styles.budgetImage} src={budgetImage}/>
        <button type="button" onClick={() => setIsBudgetOpen(true)} className={styles.button}>Budget Calculator</button>
        <Modal className={styles.modal} open={isBudgetOpen} >
          <BudgetCalculator handleClose={() => setIsBudgetOpen(false)} />
        </Modal>
      </div>

      <div className={styles.modalAndButton}>
        <img className={styles.image} id={styles.rentImage} src={rentImage}/>
        <button type="button" onClick={() => setIsRentOpen(true)} className={styles.button}>Rent Calculator</button>
        <Modal className={styles.modal} open={isRentOpen}>
          <RentCalculator handleClose={() => setIsRentOpen(false)} />
        </Modal>
      </div>

      <div className={styles.modalAndButton}>
        <img className={styles.image} id={styles.compoundInterestImage} src={compoundInterestImage}/>
        <button type="button" onClick={() => setIsCompoundInterestOpen(true)} className={styles.button}>Compound Interest Calculator</button>
          <Modal className={styles.modal} open={isCompoundInterestOpen}>
            <CompoundInterestCalculator handleClose={() => setIsCompoundInterestOpen(false)} />
          </Modal>
      </div>
    </div>


      <footer className={styles.footer}>
        <p>Graph Icon downloaded from icons8.com</p>
      </footer>
    </div>
  );
}

export default App;
