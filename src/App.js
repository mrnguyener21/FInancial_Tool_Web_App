import React, { useState } from 'react';
import { BudgetCalculator, CompoundInterestCalculator, RentCalculator, MoreInfo } from './Components';

import styles from './App.module.css'

import Modal from '@material-ui/core/Modal';

const App = ()=> {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [isRentOpen, setIsRentOpen] = useState(false);
  const [isCompoundInterestOpen, setIsCompoundInterestOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Financial Tools</h1>

      <button type="button" onClick={() => setIsBudgetOpen(true)} className={styles.button}>Budget Calculator</button>
      <Modal className={styles.modal} open={isBudgetOpen} onClose={() => setIsBudgetOpen(false)}>
        <BudgetCalculator handleClose={() => setIsBudgetOpen(false)} />
      </Modal>

      <button type="button" onClick={() => setIsRentOpen(true)} className={styles.button}>Rent Calculator</button>
      <Modal className={styles.modal} open={isRentOpen} onClose={() => setIsRentOpen(false)}>
        <RentCalculator handleClose={() => setIsRentOpen(false)} />
      </Modal>

      <button type="button" onClick={() => setIsCompoundInterestOpen(true)} className={styles.button}>Compound Interest Calculator</button>
      <Modal className={styles.modal} open={isCompoundInterestOpen} onClose={() => setIsCompoundInterestOpen(false)}>
        <CompoundInterestCalculator handleClose={() => setIsCompoundInterestOpen(false)} />
      </Modal>

      <MoreInfo />

      <footer className={styles.footer}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </footer>
    </div>
  );
}

export default App;
