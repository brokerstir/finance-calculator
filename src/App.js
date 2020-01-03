import React, { Component } from 'react';
import './App.css';
import Calc from './Calc/Calc';

class App extends Component {

  state = {
    showCalc: false,
    principal: null,
    interest: null,
    apprec: null
  };

  prinChangedHandler = (event) => {
    this.setState({principal: event.target.value})
  };

  intChangedHandler = (event) => {
    this.setState({interest: event.target.value})
  };

  toggleCalcHandler = () => {
    const doesShow = this.state.showCalc;
    this.setState({showCalc: !doesShow});
  };

  runCalcHandler = () => {
    const p = this.state.principal;
    const i = this.state.interest;
    const a = p * i;
    this.setState({apprec: a});
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
              apprec={this.state.apprec}
              prinChanged={(event) => this.prinChangedHandler(event)}
              intChanged={(event) => this.intChangedHandler(event)} />
        </div>
        )
    }

    return (
    <div className="App">
        <h1>Finance Calculator</h1>
      <button
        style={style}
        onClick={this.toggleCalcHandler}>Toggle Calc
      </button>
      {calc}
     </div>
    );
  }
}

export default App;
