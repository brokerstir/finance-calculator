import React, { PureComponent } from 'react';
import Principal from '../../CalcParts/Principal';
import IntRate from '../../CalcParts/IntRate';
import Years from '../../CalcParts/Years';
import './IntCalc.css'

class IntCalc extends PureComponent {
  render() {
  console.log("this.props", this.props);
  let ans = null;
  let err = null;
  if (this.props.hasErr) {
    err = (
          <div>
          <p className="error">{this.props.errMsg}</p>
          </div>
          );
  }
  if (this.props.finishCalc) {
    ans = (
          <div className="ans">
          <p>The interest rate is {this.props.ratePercent}</p>
          <p>The interest amount is <span className='money'>${this.props.intAmount}</span></p>
          <p>The accumulated value is <span className='money'>${this.props.accumVal}</span></p>
          </div>
          );
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Calculate Interest:</legend>
              <input
                type="checkbox"
                checked={this.props.compound}
                onChange={this.props.clickCompound} /> <small>compound</small>

                <Principal
                  princ={this.props.principal}
                  changed={this.props.valChanged}
                  blurred={this.props.inputBlurred} />

                <IntRate
                  int={this.props.interest}
                  changed={this.props.valChanged}
                  blurred={this.props.inputBlurred} />

                <Years
                  years={this.props.years}
                  changed={this.props.valChanged}
                  blurred={this.props.inputBlurred} />

              {err}
              {ans}
          </fieldset>
            <div>
              <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={this.props.click}>Calculate</a>
              <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={this.props.clear}>Clear</a>
            </div>
        </div>
      </main>

    </div>
  	);
  }
};

export default IntCalc;
