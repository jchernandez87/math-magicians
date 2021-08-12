/* eslint-disable class-methods-use-this */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className='mainContainer'>
        <div className='gridContainer'>
          <div className='result'>0</div>
          <div className='itemA'>AC</div>
          <div className='itemB'>+/-</div>
          <div className='itemC'>%</div>
          <div className='itemD'>÷</div>
          <div className='itemE'>7</div>
          <div className='itemF'>8</div>
          <div className='itemG'>9</div>
          <div className='itemH'>×</div>
          <div className='itemI'>4</div>
          <div className='itemJ'>5</div>
          <div className='itemK'>6</div>
          <div className='itemL'>-</div>
          <div className='itemM'>1</div>
          <div className='itemN'>2</div>
          <div className='itemO'>3</div>
          <div className='itemP'>+</div>
          <div className='itemQ'>0</div>
          <div className='itemR'>.</div>
          <div className='itemS'>=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;