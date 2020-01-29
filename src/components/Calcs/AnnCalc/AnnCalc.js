import React from 'react';
import Interval from '../../CalcParts/Interval';
// import CheckBox from '../../CalcParts/CheckBox';
// import Principal from '../../CalcParts/Principal';
import IntRate from '../../CalcParts/IntRate';
import Years from '../../CalcParts/Years';
import CalcClrBtns from '../../CalcParts/CalcClrBtns';
import '../CalcStyles.css'

const annCalc = (props) => {
  console.log('props', props);
  let ans = null;
  let err = null;
  if (props.hasErr) {
    err = (
          <div>

          </div>
          );
  }
  if (props.finishCalc) {
    ans = (
          <div className="ans">

          </div>
          );
  };


  return (

    <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Annuity Calculator</legend>

              <Interval
                value={props.interval}
                changed={props.valChanged} />

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
              clear={props.clear}
              menu={props.menu} />
        </div>
      </main>

    </div>
    )
}

export default annCalc;
