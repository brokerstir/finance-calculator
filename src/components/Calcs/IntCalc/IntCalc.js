import React from 'react';
import Principal from '../../CalcParts/Principal';
import IntRate from '../../CalcParts/IntRate';
import Years from '../../CalcParts/Years';
import './IntCalc.css'

const intCalc = (props) => {
  console.log("props", props);
  let ans = null;
  let err = null;
  if (props.hasErr) {
    err = (
          <div>
          <p className="error">{props.errMsg}</p>
          </div>
          );
  }
  if (props.finishCalc) {
    ans = (
          <div className="ans">
          <p>The interest rate is {props.ratePercent}</p>
          <p>The interest amount is <span className='money'>${props.intAmount}</span></p>
          <p>The accumulated value is <span className='money'>${props.accumVal}</span></p>
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
                checked={props.compound}
                onChange={props.clickCompound} /> <small>compound</small>

                <Principal
                  princ={props.principal}
                  changed={props.valChanged}
                  blurred={props.inputBlurred} />

                <IntRate
                  int={props.interest}
                  changed={props.valChanged}
                  blurred={props.inputBlurred} />

                <Years
                  years={props.years}
                  changed={props.valChanged}
                  blurred={props.inputBlurred} />

              {err}
              {ans}
          </fieldset>
            <div>
              <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.click}>Calculate</a>
              <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.clear}>Clear</a>
            </div>
        </div>
      </main>

    </div>
  	)
}

export default intCalc;