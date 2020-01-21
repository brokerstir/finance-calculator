import React from 'react';

const intRate = (props) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Interest Rate %</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="interest"
          value={props.int}
          onChange={props.changed}
          onBlur={props.blurred} />
    </div>
    )
}

export default intRate;
