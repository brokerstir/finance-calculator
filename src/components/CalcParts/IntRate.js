import React, { PureComponent } from 'react';

class IntRate extends PureComponent {
  render() {
  console.log("IntRate");
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Interest Rate %</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="interest"
          value={this.props.int}
          onChange={this.props.changed}
          onBlur={this.props.blurred} />
    </div>
    );
  }
};

export default IntRate;
