import React, { Component } from 'react';
import './App.css';
import CalcMenu from '../components/CalcParts/CalcMenu';
import IntCalc from '../components/Calcs/IntCalc/IntCalc';
import AnnCalc from '../components/Calcs/AnnCalc/AnnCalc';
import PerPymntCalc from '../components/Calcs/PerPymntCalc/PerPymntCalc';
import 'tachyons';

class App extends Component {

  state = {
    showCalc: false,
    calcType: '',
    principal: '',
    interest: '',
    interval: 'Monthly',
    years: 1,
    ratePercent: '',
    rateDecimal: '',
    intAmount: '',
    futVal: '',
    presVal: '',
    finishCalc: false,
    hasErr: false,
    compound: false,
    simple: true,
    errMsg: ''
  };

  valChangedHandler = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    this.setValHandler(name, val, false);
  };

  setValHandler = (name, val, invalid) => {
    let w = name === 'years' ? 1 : '';
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
      case 'interval':
        this.setState({interval: v, hasErr: invalid, errMsg: err});
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
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  toggleMenuHandler = (event) => {
    const name = event.target.name;
    switch (name) {
      case 'intCalc':
        this.setCalc(name);
        break;
      case 'annCalc':
        this.setCalc(name);
        break;
      case 'perPymntCalc':
        this.setCalc(name);
        break;
      default:
        break;
    }
  };

  setCalc = (name) => {
    this.setState({
      showCalc: !this.state.showCalc,
      calcType: name
    });
  };

  toggleBoxHandler = (event) => {
    const name = event.target.name;
    switch (name) {
      case 'compound':
        this.setIntTypeBoxes();
        break;
      case 'simple':
        this.setIntTypeBoxes();
        break;
      default:
        break;
    }
  };

  setIntTypeBoxes = () => {
    this.setState({
      compound: !this.state.compound,
      simple: !this.state.simple
    });
  };

  runClearHandler = () => {
    this.setState({
      principal:'',
      interest: '',
      interval: '',
      years: 1,
      ratePercent: '',
      rateDecimal: '',
      intAmount: '',
      futVal: '',
      presVal: '',
      finishCalc: false,
      hasErr: false,
      compound: false,
      simple: true,
      errMsg: ''
    });
  };

  runMenuHandler = () => {
    this.setState({
      showCalc: false,
      calcType: '',
      principal: '',
      interest: '',
      years: 1,
      ratePercent: '',
      rateDecimal: '',
      intAmount: '',
      futVal: '',
      presVal: '',
      finishCalc: false,
      hasErr: false,
      compound: false,
      simple: true,
      errMsg: ''
    });
  };

  runCalcValidator = (event) => {
    const name = event.target.name;
    const p = parseFloat(this.state.principal);
    const i = parseFloat(this.state.interest);
    const t = parseFloat(this.state.years);
    const invalid = (p === '' || i === '' || t === '');
    // const notNum = ( isNaN(p) || isNaN(i) || isNaN(t) );
    if (invalid) {
      this.setState({
        years: 1,
        ratePercent: '',
        rateDecimal: '',
        intAmount: '',
        futVal: '',
        presVal: '',
        finishCalc: false,
        hasErr: true,
        errMsg: 'Error: Blank Input'
      });
      return
    }
    switch (name) {
      case 'intCalc':
        this.runIntCalcHandler(p, i, t);
        break;
      case 'annCalc':
        this.runAnnCalcHandler(p, i, t);
        break;
      case 'perPymntCalc':
        this.runPerPymntCalcHandler(p, i, t);
        break;
      default:
        break;
    }
  };

  runIntCalcHandler = (p, i, t) => {
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
      futVal: av,
      finishCalc: true,
      hasErr: false,
      errMsg: ''
    });
  };

  runAnnCalcHandler = (p, i, t) => {
    const rd = (i / 100);
    const rdpp = this.runIntPerPeriod(rd);
    const n = this.runNumPeriods(t);
    const rp = (i).toFixed(2) + '%';
    let fv = p * ( ( (1 + rdpp) ** n - 1 ) / rdpp );
    let pv = p * ( ( 1 - (1 + rdpp) ** -n ) / rdpp );
    fv = this.numberWithCommas(fv.toFixed(2));
    pv = this.numberWithCommas(pv.toFixed(2));
    this.setState({
      rateDecimal: rd.toFixed(4),
      ratePercent: rp,
      futVal: fv,
      presVal: pv,
      finishCalc: true,
      hasErr: false,
      errMsg: ''
    });
  };

  runPerPymntCalcHandler = (p, i, t) => {
    const rd = (i / 100);
    const rdpp = this.runIntPerPeriod(rd);
    const n = this.runNumPeriods(t);
    const rp = (i).toFixed(2) + '%';
    let pp = p * ( rdpp / ( 1 - (1 + rdpp) ** -n ))
    console.log('total:', n*pp)
    pp = this.numberWithCommas(pp.toFixed(2));
    this.setState({
      rateDecimal: rd.toFixed(4),
      ratePercent: rp,
      futVal: pp,
      finishCalc: true,
      hasErr: false,
      errMsg: ''
    });
  };

  runIntPerPeriod = (rd) => {
    const interval = this.state.interval
    switch (interval) {
      case 'Monthly':
        return rd/12;
      case 'Quarterly':
        return rd/4;
      case 'Semi-Annually':
        return rd/2;
      case 'Annually':
        return rd;
      default:
        break;
    }
  };

  runNumPeriods = (t) => {
    const interval = this.state.interval
    switch (interval) {
      case 'Monthly':
        return t*12;
      case 'Quarterly':
        return t*4;
      case 'Semi-Annually':
        return t*2;
      case 'Annually':
        return t;
      default:
        break;
    }
  };

  render() {

    let calcMenu = null;
    let intCalc = null;
    let annCalc = null;
    if (!this.state.showCalc) {
      calcMenu = (
        <div>
            <CalcMenu
                changed={(event) => this.toggleMenuHandler(event)} />
        </div>
        )

    } else if (this.state.calcType === 'intCalc') {
      intCalc = (
        <div>
            <IntCalc
              click={(event) => this.runCalcValidator(event)}
              clear={this.runClearHandler}
              menu={this.runMenuHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              errMsg={this.state.errMsg}
              compound={this.state.compound}
              simple={this.state.simple}
              principal={this.state.principal}
              interest={this.state.interest}
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              rateDecimal={this.state.rateDecimal}
              intAmount={this.state.intAmount}
              futVal={this.state.futVal}
              clickBox={(event) => this.toggleBoxHandler(event)}
              valChanged={(event) => this.valChangedHandler(event)}
              inputBlurred={(event) => this.inputBlurHandler(event)} />
        </div>
        )
    } else if (this.state.calcType === 'annCalc') {
      annCalc = (
        <div>
            <AnnCalc
              click={this.runCalcValidator}
              clear={this.runClearHandler}
              menu={this.runMenuHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              errMsg={this.state.errMsg}
              interest={this.state.interest}
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              principal={this.state.principal}
              interval={this.state.interval}
              futVal={this.state.futVal}
              presVal={this.state.presVal}
              valChanged={(event) => this.valChangedHandler(event)}
              inputBlurred={(event) => this.inputBlurHandler(event)} />
        </div>
        )
    } else if (this.state.calcType === 'perPymntCalc') {
      annCalc = (
        <div>
            <PerPymntCalc
              click={this.runCalcValidator}
              clear={this.runClearHandler}
              menu={this.runMenuHandler}
              finishCalc={this.state.finishCalc}
              hasErr={this.state.hasErr}
              errMsg={this.state.errMsg}
              interest={this.state.interest}
              years={this.state.years}
              ratePercent={this.state.ratePercent}
              principal={this.state.principal}
              interval={this.state.interval}
              futVal={this.state.futVal}
              presVal={this.state.presVal}
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
        {calcMenu}
        {intCalc}
        {annCalc}
      </div>
    );
  }
}

export default App;
