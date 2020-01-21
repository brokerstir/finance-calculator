import React, { Component } from 'react';
import './App.css';
import IntCalc from '../components/Calcs/IntCalc/IntCalc';
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
    compound: false,
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
    let err = invalid ? 'Error: Invalid Input' : '';
    switch (name) {
      case 'principal':
        this.setState({principal: v, hasErr: invalid, errMsg: err});
        break;
      case 'interest':
        this.setState({interest: v, hasErr: invalid, errMsg: err});
        break;
      case 'years':
        this.setState({years: v, hasErr: invalid, errMsg: err});
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

  numberWithCommas = (x) => {
    // x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // 9999.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  toggleCompoundHandler = () => {
    const isCompound = this.state.compound;
    this.setState({compound: !isCompound});
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
      compound: false,
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
        // principal: '',
        years: 1,
        // interest: '',
        ratePercent: '',
        rateDecimal: '',
        intAmount: '',
        accumVal: '',
        finishCalc: false,
        hasErr: true,
        errMsg: 'Error: Blank Input'
      });
      return
    }
    this.runCalcHandler(p, i, t);
  };

  runCalcHandler = (p, i, t) => {
    const allZero = ((i === 0) && (p === 0));
    const rd = (i / 100);
    const rp = (i).toFixed(2) + '%';
    let s = null;
    let av = null;
    if (this.state.compound) {
      av = p * ((rd + 1) ** t);
      s = av - p;
    } else {
      s = p * rd * t;
      av = s + p;
    }
    av = this.numberWithCommas(av.toFixed(2));
    s = this.numberWithCommas(s.toFixed(2));
    this.setState({
      rateDecimal: rd.toFixed(4),
      ratePercent: rp,
      intAmount: s,
      accumVal: av,
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

    let intCalc = null;
    if (this.state.showCalc) {
      intCalc = (
        <div>
            <IntCalc
              click={this.runCalcValidator}
              clear={this.runClearHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              errMsg={this.state.errMsg}
              compound={this.state.compound}
              principal={this.state.principal}
              interest={this.state.interest}
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              rateDecimal={this.state.rateDecimal}
              intAmount={this.state.intAmount}
              accumVal={this.state.accumVal}
              clickCompound={(event) => this.toggleCompoundHandler(event)}
              valChanged={(event) => this.valChangedHandler(event)}
              inputBlurred={(event) => this.inputBlurHandler(event)} />
        </div>
        )
    }

    return (
      <div>
        <div className="App">
          <h1>{this.props.appTitle}</h1>
          <h4>A Single Page React App</h4>
        </div>
        {intCalc}
      </div>
    );
  }
}

export default App;
