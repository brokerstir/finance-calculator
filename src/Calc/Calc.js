import React from 'react';
import './Calc.css'

const calc = (props) => {
  console.log("props", props);
  let ans = null;
  let notice = 'Rate of Interest';
  if (props.hasErr) {
    notice = 'Error: Invalid Input';
  }
  if (props.finishCalc) {
    ans = (
          <div>
          <p>The interest rate is {props.ratePercent}</p>
          <p>The interest amount is ${props.sum}</p>
          </div>
          );
    console.log("ans", ans);
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">{notice}</legend>
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

          </fieldset>
            <div>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.click}>Calculate</button>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.clear}>Clear</button>
            </div>
        </div>
        {ans}
      </main>

    </div>
  	)
}

export default calc;
