import React, { Component } from 'react';
import './App.css';
import Calc from './Calc/Calc';
import 'tachyons';

class App extends Component {

  state = {
    showCalc: false,
    principal: '',
    interest: '',
    ratePercent: '',
    rateDecimal: '',
    sum: '',
    finishCalc: false,
    hasErr: false
  };

  prinChangedHandler = (event) => {
    const principal = event.target.value;
    this.setState({principal: principal})
  };

  intChangedHandler = (event) => {
    const interest = event.target.value;
    this.setState({interest: interest});
  };

  intLeftHandler = (event) => {
    console.log(event.target.value)
  };

  toggleCalcHandler = () => {
    const doesShow = this.state.showCalc;
    this.setState({showCalc: !doesShow});
  };

  runClearHandler = () => {
    this.setState({
      principal:'',
      interest: '',
      ratePercent: '',
      rateDecimal: '',
      sum: '',
      finishCalc: false,
      hasErr: false
    });
  };

  runValidator = () => {
    const p = parseFloat(this.state.principal);
    const i = parseFloat(this.state.interest);
    const invalid = (p === '' || i === '' || isNaN(p) || isNaN(i));
    if (invalid) {
      this.setState({
        principal: '',
        interest: '',
        ratePercent: '',
        rateDecimal: '',
        sum: '',
        finishCalc: false,
        hasErr: true
      });
      return
    }
    this.runCalcHandler(p, i)
  };

  runCalcHandler = (p, i) => {
    const allZero = ((i === 0) && (p === 0))
    const rd = allZero ? 0 : (i / p).toFixed(4);
    const rp = (rd * 100).toFixed(2) + '%';
    const s = p + i;
    this.setState({
      rateDecimal: rd,
      ratePercent: rp,
      sum: s,
      finishCalc: true,
      hasErr: false
    });
  }

  render() {

  	const style = {
  		backgroundColor: 'white',
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	}

    let calc = null;
    if (this.state.showCalc) {
      calc = (
        <div>
            <Calc
              click={this.runValidator}
              clear={this.runClearHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              principal={this.state.principal}
              interest={this.state.interest}
              ratePercent={this.state.ratePercent}
              rateDecimal={this.state.rateDecimal}
              sum={this.state.sum}
              prinChanged={(event) => this.prinChangedHandler(event)}
              intChanged={(event) => this.intChangedHandler(event)}
              intLeft={(event) => this.intLeftHandler(event)} />
        </div>
        )
    }

    return (
      <div>
        <div className="App">
          <h1>Finance Calculator</h1>
            <button
              style={style}
              onClick={this.toggleCalcHandler}>Toggle Calc
            </button>
        </div>
        {calc}
      </div>
    );
  }
}

export default App;
