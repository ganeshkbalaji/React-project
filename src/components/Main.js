require('../styles/App.scss');

import React from 'react';
import Form from './Form.js';
import Search from './Search.js';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
      showForm: true,
    };
  }
  toggleState(event) {
    event.preventDefault();
    console.log(this, this.state);
    if (!this.state || !this.setState) {
      return;
    }

    this.setState({
      showSearch: !this.state.showSearch,
      showForm: !this.state.showForm,
    });
  }
  showForm() {
    return this.state ? this.state.showForm : false;
  }
  showSearch() {
    return this.state ? this.state.showSearch : false;
  }
  render() {
    return (
    <div className="content">
      <div className="heading">
        <div className="title">
          <div className="circle">
          <p>Medcompany</p>
          </div>
        </div>
      <div className="subtitle">
        <p>Medcompany Efficacy Study</p>
      </div>
      </div>
      <div className="form-container">
        {this.showForm() ? <Form showSearch={this.toggleState.bind(this)} /> : null}
        {this.showSearch() ? <Search /> : null}
      </div>
      <div className="contact">
        <p>Contact Us</p>
      </div>
    </div>
    );
  }
}

export default AppComponent;
