require('../styles/Form.scss');

import React from 'react';

export default class AppComponent extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      firstName: '',
      lastName: '',
      city: '',
      radial: false,
      formValid: false,
    };
  }
  onChangeFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  onChangeLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  onChangeCity(event) {
    this.setState({
      city: event.target.value,
    });
  }

  onChangeRadial() {
    this.setState({
      radial: true,
    });
  }


  onSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, city, radial } = this.state;
    console.log({
      request: 'POST',
      firstName,
      lastName,
      radial,
      city,
    });
  }

  isFormValid() {
    const { firstName, lastName, city, radial } = this.state;
    if (firstName.length > 0 && lastName.length > 0 && city.length > 0 && radial) {
      return true;
    }
    return false;
  }
  render() {
    const { firstName, lastName, city, radial } = this.state;
    const { showSearch } = this.props;
    return (
      <div className="form">
      <div>
        <h1>Voluntary Participation</h1>
        <p>
          Participation in this study is voluntary.
          If you do not wish to participate, there will be no penalty of any kind.
        </p>
        <p>
          To confirm your intent to enroll in this study, please complete the form below.
        </p>
      </div>
        <form onSubmit={this.onSubmit.bind(this)} onChange={this.onChange}>
        <div className="editor-cell">
          <label>First Name:</label>
          <input id="firstName" type="text"
            onChange={this.onChangeFirstName.bind(this)}
            value={firstName}
            defaultValue="Enter your First Name here"
          />
        </div>
        <div className="editor-cell">
          <label className="last">Last Name:</label>
          <input id="lastName" type="text"
            onChange={this.onChangeLastName.bind(this)} value={lastName}
            defaultValue="Enter your Last Name here"
          />
        </div>
        <div className="form-row">
          <label>What city were you born in?:</label>
          <input id="city" type="text"
            onChange={this.onChangeCity.bind(this)} value={city}
            defaultValue="Enter your city here"
          />
        </div>
        <div className="radial">
          <input type="radio" id="checkBox"
            onChange = {this.onChangeRadial.bind(this)} value={radial}
          />
          <label className="chck">
            I consent to participate in the study
          </label>
        </div>
        <div className="form-row">
          <button onClick={showSearch}>
          </button>
          <input className="final"
            value={this.isFormValid() ? 'I understand and wish to continue with Enrollment' :
          'Complete the form to continue enrollment'}
            type="submit"
            disabled={!this.isFormValid()}
          />
        </div>
        </form>
      </div>
      );
  }
}


AppComponent.propTypes = {
  showSearch: React.PropTypes.func.isRequired,
};
