import React, { PureComponent } from 'react';

class Principal extends PureComponent {
  render() {
  console.log("IntRate");
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6">Principal $</label>
      <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
          type="text"
          name="principal"
          value={this.props.princ}
          onChange={this.props.changed}
          onBlur={this.props.blurred} />
    </div>
    );
  }
};

export default Principal;
