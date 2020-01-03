import React from 'react';

const calc = (props) => {
  return (

    <div className="Calc">
      <input
      	type="text"
      	value={props.principal}
      	onChange={props.prinChanged} />
      <input
      	type="text"
      	value={props.interest}
      	onChange={props.intChanged} />
      <button
        onClick={props.click}>Calculate
      </button>
      <p>{props.apprec}</p>
    </div>
  	)
}

export default calc;
