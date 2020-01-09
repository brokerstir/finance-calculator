import React, { Component } from 'react';
import './App.css';
import Calc from './Calc/Calc';
import 'tachyons';

class App extends Component {

  state = {
    showCalc: true,
    principal: '',
    interest: '',
    years: 1,
    ratePercent: '',
    rateDecimal: '',
    sum: '',
    finishCalc: false,
    hasErr: false
  };

  valChangedHandler = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    this.setValHandler(name, val, false);
  };

  setValHandler = (name, val, invalid) => {
    console.log("val", val);
    const v = invalid ? '' : val;
    console.log("v", v);
    switch (name) {
      case 'principal':
        this.setState({principal: v, hasErr: invalid});
        break;
      case 'interest':
        this.setState({interest: v, hasErr: invalid});
        break;
      case 'years':
        this.setState({years: v, hasErr: invalid});
        break;
      default:
        break;
    }
  };

  intChangedHandler = (event) => {
    const interest = event.target.value;
    this.setState({interest: interest});
  };

  yearsChangedHandler = (event) => {
    const years = event.target.years;
    this.setState({years: years});
  };

  inputBlurHandler = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    const invalid = (val === '' || isNaN(val));
    const v = invalid ? '' : val;
    this.setValHandler(name, v, invalid);
  };

  toggleCalcHandler = () => {
    const doesShow = this.state.showCalc;
    this.setState({showCalc: !doesShow});
  };

  runClearHandler = () => {
    this.setState({
      principal:'',
      interest: '',
      years: 1,
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
    const t = parseFloat(this.state.years);
    const invalid = (p === '' || i === '' || isNaN(p) || isNaN(i));
    if (invalid) {
      this.setState({
        principal: '',
        years: 1,
        interest: '',
        ratePercent: '',
        rateDecimal: '',
        sum: '',
        finishCalc: false,
        hasErr: true
      });
      return
    }
    this.runCalcHandler(p, i, t);
  };

  runCalcHandler = (p, i, t) => {
    const allZero = ((i === 0) && (p === 0));
    // const rd = allZero ? 0 : (i / p).toFixed(4);
    // const rp = (rd * 100).toFixed(2) + '%';
    const rd = (i / 100).toFixed(4);
    const rp = (i).toFixed(2) + '%';
    const s = p * rd * t;
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
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              rateDecimal={this.state.rateDecimal}
              sum={this.state.sum}
              valChanged={(event) => this.valChangedHandler(event)}
              inputBlurred={(event) => this.inputBlurHandler(event)} />
        </div>
        )
    }

    return (
      <div>
        <div className="App">
          <h1>Finance Calculator</h1>
        </div>
        {calc}
      </div>
    );
  }
}

export default App;
