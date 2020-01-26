import React from 'react';
import CheckBox from '../../CalcParts/CheckBox';
import Principal from '../../CalcParts/Principal';
import IntRate from '../../CalcParts/IntRate';
import Years from '../../CalcParts/Years';
import CalcClrBtns from '../../CalcParts/CalcClrBtns';
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
          <p>The total value is <span className='money'>${props.accumVal}</span></p>
          </div>
          );
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Calculate Interest:</legend>

              <CheckBox
                title='Interest Type'
                nameA='simple'
                checkedA={props.simple}
                nameB='compound'
                checkedB={props.compound}
                changed={props.clickBox} />

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

            <CalcClrBtns
              click={props.click}
              clear={props.clear} />
        </div>
      </main>

    </div>
  	)
}

export default intCalc;
