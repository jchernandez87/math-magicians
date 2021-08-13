import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [currentState, setState] = useState({});

  function updateState(e) {
    const target = e.target.name;
    setState(calculate(currentState, target));
  }

  const { total, next, operation } = currentState;

  return (
    <div className="mainContainer">
      <div className="gridContainer">
        <div className="result">{`${total === undefined || total === null ? '' : total} ${operation === undefined || operation === null ? '' : operation} ${next === undefined || next === null ? '' : next}`}</div>
        <button onClick={updateState} type="button" name="AC" className="itemA">AC</button>
        <button onClick={updateState} type="button" name="+/-" className="itemB">+/-</button>
        <button onClick={updateState} type="button" name="%" className="itemC">%</button>
        <button onClick={updateState} type="button" name="÷" className="itemD">÷</button>
        <button onClick={updateState} type="button" name="7" className="itemE">7</button>
        <button onClick={updateState} type="button" name="8" className="itemF">8</button>
        <button onClick={updateState} type="button" name="9" className="itemG">9</button>
        <button onClick={updateState} type="button" name="x" className="itemH">×</button>
        <button onClick={updateState} type="button" name="4" className="itemI">4</button>
        <button onClick={updateState} type="button" name="5" className="itemJ">5</button>
        <button onClick={updateState} type="button" name="6" className="itemK">6</button>
        <button onClick={updateState} type="button" name="-" className="itemL">-</button>
        <button onClick={updateState} type="button" name="1" className="itemM">1</button>
        <button onClick={updateState} type="button" name="2" className="itemN">2</button>
        <button onClick={updateState} type="button" name="3" className="itemO">3</button>
        <button onClick={updateState} type="button" name="+" className="itemP">+</button>
        <button onClick={updateState} type="button" name="0" className="itemQ">0</button>
        <button onClick={updateState} type="button" name="." className="itemR">.</button>
        <button onClick={updateState} type="button" name="=" className="itemS">=</button>
      </div>
    </div>
  );
}

export default Calculator;
