import React from 'react';
import Interval from '../../CalcParts/Interval';
import Principal from '../../CalcParts/Principal';
import IntRate from '../../CalcParts/IntRate';
import Years from '../../CalcParts/Years';
import CalcClrBtns from '../../CalcParts/CalcClrBtns';
import '../CalcStyles.css'

const perPymntCalc = (props) => {
  console.log('props', props);
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
            <p>The annual interest rate is <span className='money'>{props.ratePercent}</span></p>
            <p>The periodic payment amount is  <span className='money'>${props.futVal}</span></p>
          </div>
          );
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Certain Annuity Payments</legend>

              <Principal
                title='Principal Amount'
                princ={props.principal}
                changed={props.valChanged}
                blurred={props.inputBlurred} />

              <Interval
                title='Payment Interval'
                value={props.interval}
                changed={props.valChanged} />

              <IntRate
                title='Annual Interest Rate'
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
              name='perPymntCalc'
              click={props.click}
              clear={props.clear}
              menu={props.menu} />
        </div>
      </main>

    </div>
    )
}

export default perPymntCalc;
