// components/DateInput.jsx
import React from 'react';
import styles from './DateInput.module.css';

const DateInput = () => {
  return (
    <div  className={styles.inputWrapper}>
      <div  className={styles.inputhe}>

        <input type="date" className="input" />
      </div>
    </div>
  );
};

export default DateInput;