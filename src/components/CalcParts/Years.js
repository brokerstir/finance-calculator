import React from 'react';

const years = (props) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Number of Years</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="years"
          value={props.years}
          onChange={props.changed}
          onBlur={props.blurred} />
    </div>
    )
}

export default years;
