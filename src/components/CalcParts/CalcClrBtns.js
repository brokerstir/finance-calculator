import React from 'react';

const calcClrBtns = (props) => {
  return (
    <div>
      <button className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.click}>Calculate</button>
      <button className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.clear}>Clear</button>
      <button className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.menu}>Menu</button>
    </div>
    )
}

export default calcClrBtns;
