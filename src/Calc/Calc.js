import React from 'react';
import './Calc.css'

const calc = (props) => {
  console.log("props", props);
  let ans = null;
  let notice = 'Rate of Interest';
  if (props.hasErr) {
    //TODO: Put all errMsg in props
    notice = 'Error: Invalid Input' + (props.errMsg);
  }
  if (props.finishCalc) {
    ans = (
          <div>
          <p>The interest rate is {props.ratePercent}</p>
          <p>The interest amount is ${props.intAmount}</p>
          <p>The accumulated value is ${props.accumVal}</p>
          </div>
          );
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">{notice}</legend>
              <input
                type="checkbox"
                checked={props.compound}
                onClick={props.clickCompound} /> <small>compound</small>
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
              {ans}
          </fieldset>
            <div>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.click}>Calculate</button>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.clear}>Clear</button>
            </div>
        </div>
      </main>

    </div>
  	)
}

export default calc;
