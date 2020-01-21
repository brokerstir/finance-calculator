import React, { PureComponent } from 'react';

class Years extends PureComponent {
  render() {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Number of Years</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="years"
          value={this.props.years}
          onChange={this.props.changed}
          onBlur={this.props.blurred} />
    </div>
    );
  }
};

export default Years;
