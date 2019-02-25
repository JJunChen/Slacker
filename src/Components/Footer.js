import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className="message-input input-group mb-3">
        <input type="text" className="form-control" placeholder="Message" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Send</button>
        </div>
      </div>
    )
  }
}

export default Footer;