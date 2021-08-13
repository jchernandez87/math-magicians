import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.target = e.target;
    this.result = calculate(this.state, this.target.name);
    this.setState(this.result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="mainContainer">
        <div className="gridContainer">
          <div className="result">{`${total === null ? '' : total} ${operation === null ? '' : operation} ${next === null ? '' : next}`}</div>
          <button onClick={this.handleClick} type="button" name="AC" className="itemA">AC</button>
          <button onClick={this.handleClick} type="button" name="+/-" className="itemB">+/-</button>
          <button onClick={this.handleClick} type="button" name="%" className="itemC">%</button>
          <button onClick={this.handleClick} type="button" name="÷" className="itemD">÷</button>
          <button onClick={this.handleClick} type="button" name="7" className="itemE">7</button>
          <button onClick={this.handleClick} type="button" name="8" className="itemF">8</button>
          <button onClick={this.handleClick} type="button" name="9" className="itemG">9</button>
          <button onClick={this.handleClick} type="button" name="x" className="itemH">×</button>
          <button onClick={this.handleClick} type="button" name="4" className="itemI">4</button>
          <button onClick={this.handleClick} type="button" name="5" className="itemJ">5</button>
          <button onClick={this.handleClick} type="button" name="6" className="itemK">6</button>
          <button onClick={this.handleClick} type="button" name="-" className="itemL">-</button>
          <button onClick={this.handleClick} type="button" name="1" className="itemM">1</button>
          <button onClick={this.handleClick} type="button" name="2" className="itemN">2</button>
          <button onClick={this.handleClick} type="button" name="3" className="itemO">3</button>
          <button onClick={this.handleClick} type="button" name="+" className="itemP">+</button>
          <button onClick={this.handleClick} type="button" name="0" className="itemQ">0</button>
          <button onClick={this.handleClick} type="button" name="." className="itemR">.</button>
          <button onClick={this.handleClick} type="button" name="=" className="itemS">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
