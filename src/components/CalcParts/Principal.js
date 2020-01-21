import React from 'react';
// import classes from './Person.module.css';

const principal = (props) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Principal $</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="principal"
          value={props.princ}
          onChange={props.changed}
          onBlur={props.blurred} />
    </div>
    )
}

export default principal;
