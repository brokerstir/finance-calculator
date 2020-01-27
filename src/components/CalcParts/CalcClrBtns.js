import React from 'react';

const calcClrBtns = (props) => {
  return (
    <div>
      <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.click}>Calculate</a>
      <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.clear}>Clear</a>
      <a className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={props.menu}>Menu</a>
    </div>
    )
}

export default calcClrBtns;
