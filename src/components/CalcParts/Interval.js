import React from 'react';

const interval = (props) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Number of Years</label>
      <select
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        value={props.value}
        name='interval'
        onChange={props.changed}>
        <option value='Monthly'>Monthly</option>
        <option value='Quarterly'>Quarterly</option>
        <option value='Semi-Annually'>Semi-Annually</option>
        <option value='Annually'>Annually</option>
      </select>
    </div>
    )
}

export default interval;
