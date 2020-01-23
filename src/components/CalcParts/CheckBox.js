import React from 'react';

const checkBox = (props) => {
  return (
    <div className="mt3">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.changed} /> <small>compound</small>

    </div>
    )
}

export default checkBox;
