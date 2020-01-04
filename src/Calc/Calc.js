import React from 'react';
import './Calc.css'

const calc = (props) => {
  console.log("props", props);
  let ans = null;
  if (props.hasErr) {
    ans = (<p>Error: Invalid Input</p>);
  } else if (props.finshCalc) {
    ans = (<p>The rate is {props.rateDecimal}, or you could say interest accumlates at the rate of {props.ratePercent}.</p>)
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Rate of Interest</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Principal $</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  value={props.principal}
                  onChange={props.prinChanged} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Interest $</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  value={props.interest}
                  onChange={props.intChanged}
                  onBlur={props.intLeft} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Rate of Interest %</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  value={props.ratePercent}
                  disabled={true} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Accumulated Sum $</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  value={props.sum}
                  readOnly />
              </div>
          </fieldset>
            <div>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.click}>Calculate</button>
              <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={props.clear}>Clear</button>
            </div>
        {ans}
        </div>
      </main>

    </div>
  	)
}

export default calc;
