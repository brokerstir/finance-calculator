import React from 'react';
import '../Calcs/CalcStyles.css'

const checkBox = (props) => {
  return (
     <div className="Calc">

      <main className="pa4 black-80">
        <div>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Choose Calculator</legend>

             <div className="flex items-center mb2">
            <input
              type="checkbox"
              name="intCalc"
              className="mr2"
              checked={false}
              onChange={props.changed} />
              <label
                className="lh-copy"><small>lump sum investment</small>  </label>
          </div>

          <div className="flex items-center mb2">
            <input
              type="checkbox"
              name="annCalc"
              className="mr2"
              checked={false}
              onChange={props.changed} />
              <label
                className="lh-copy"><small>periodic investment</small>  </label>
          </div>

          <div className="flex items-center mb2">
            <input
              type="checkbox"
              name="perPymntCalc"
              className="mr2"
              checked={false}
              onChange={props.changed} />
              <label
                className="lh-copy"><small>certain annuity payments</small>  </label>
          </div>



          </fieldset>
        </div>
      </main>
      </div>

    )
}

export default checkBox;
