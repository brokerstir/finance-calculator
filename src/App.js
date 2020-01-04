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
    ans: ''
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
    // const val = event.target.value;
    // if (!isNaN(val)) this.setState({interest: val + '%'});
    // const interest = isNaN(val) || (val == '') ? val : val + '%'
  };

  toggleCalcHandler = () => {
    const doesShow = this.state.showCalc;
    this.setState({showCalc: !doesShow});
  };

  runCalcHandler = () => {
    console.log("Click")
    const p = this.state.principal;
    const i = this.state.interest;
    // const a = isNaN(p * i) ? 'Error: Invalid Input' : p * i;
    const notNum = isNaN(i / p);
    const err = 'Error: Invalid Input';
    const rd = notNum ? err : i / p;
    const rp = notNum ? err : (rd * 100) + '%';
    const s = notNum ? err : parseFloat(p) + parseFloat(i);
    this.setState({
      rateDecimal: rd,
      ratePercent: rp,
      sum: s
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
              click={this.runCalcHandler}
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
