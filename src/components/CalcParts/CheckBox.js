import React from 'react';

const checkBox = (props) => {
  return (
    <div className="mt3">

      <label className="db fw6 lh-copy f6">{props.title}</label>

        <input
          type="checkbox"
          name={props.nameA}
          className="mr2"
          checked={props.checkedA}
          onChange={props.changed} />
          <label
            className="lh-copy"><small>{props.nameA}</small>  </label>&nbsp;

        <input
          type="checkbox"
          name={props.nameB}
          className="mr2"
          checked={props.checkedB}
          onChange={props.changed} />
          <label
            className="lh-copy"><small>{props.nameB}</small>  </label>

    </div>
    )
}

export default checkBox;
