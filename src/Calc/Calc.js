import React from 'react';
import './Calc.css'

const calc = (props) => {
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
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Principal $</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="principal"
                  value={props.principal}
                  onChange={props.valChanged}
                  onBlur={props.inputBlurred} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Interest Rate %</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="interest"
                  value={props.interest}
                  onChange={props.valChanged}
                  onBlur={props.inputBlurred} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Number of Years</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="years"
                  value={props.years}
                  onChange={props.valChanged}
                  onBlur={props.inputBlurred} />
              </div>
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

export default calc;
