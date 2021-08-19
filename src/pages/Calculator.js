import React from 'react';
import './Calculator.css';
import Calculator from '../components/Calculator';

const CalculatorPage = () => {
  const title = "Let's do some math";

  return (
    <div className="calculator">
      <h2>{title}</h2>
      <div className="appContainer">
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
