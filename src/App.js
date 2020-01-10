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
    intAmount: '',
    accumVal: '',
    finishCalc: false,
    hasErr: false,
    errMsg: ''
  };

  valChangedHandler = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    this.setValHandler(name, val, false);
  };

  setValHandler = (name, val, invalid) => {
    let w = name == 'years' ? 1 : '';
    let v = invalid ? w : val;
    switch (name) {
      case 'principal':
        this.setState({principal: v, hasErr: invalid, errMsg: ''});
        break;
      case 'interest':
        this.setState({interest: v, hasErr: invalid, errMsg: ''});
        break;
      case 'years':
        this.setState({years: v, hasErr: invalid, errMsg: ''});
        break;
      default:
        break;
    }
  };

  inputBlurHandler = (event) => {
    let val = event.target.value;
    const name = event.target.name;
    const invalid = isNaN(val);
    if (invalid) val = '';
    this.setValHandler(name, val, invalid);
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
      intAmount: '',
      accumVal: '',
      finishCalc: false,
      hasErr: false,
      errMsg: ''
    });
  };

  runCalcValidator = () => {
    const p = parseFloat(this.state.principal);
    const i = parseFloat(this.state.interest);
    const t = parseFloat(this.state.years);
    const invalid = (p === '' || i === '' || t === '');
    const notNum = ( isNaN(p) || isNaN(i) || isNaN(t) );
    if (invalid || notNum) {
      this.setState({
        principal: '',
        years: 1,
        interest: '',
        ratePercent: '',
        rateDecimal: '',
        intAmount: '',
        accumVal: '',
        finishCalc: false,
        hasErr: true,
        errMsg: 'Error: Calculaton cannot run with blank input.'
      });
      return
    }
    this.runCalcHandler(p, i, t);
  };

  runCalcHandler = (p, i, t) => {
    const allZero = ((i === 0) && (p === 0));
    const rd = (i / 100).toFixed(4);
    const rp = (i).toFixed(2) + '%';
    const s = p * rd * t;
    this.setState({
      rateDecimal: rd,
      ratePercent: rp,
      intAmount: (s).toFixed(2),
      accumVal: (s + p).toFixed(2),
      finishCalc: true,
      hasErr: false,
      errMsg: ''
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
              click={this.runCalcValidator}
              clear={this.runClearHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              errMsg={this.state.errMsg}
              principal={this.state.principal}
              interest={this.state.interest}
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              rateDecimal={this.state.rateDecimal}
              intAmount={this.state.intAmount}
              accumVal={this.state.accumVal}
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
