require('../styles/Search.scss');
require('../../node_modules/react-select/dist/react-select.min.css');

import React from 'react';
import Select from 'react-select';

const options = [
  {
    first_name: 'John',
    last_name: 'Doe',
    zip: 12340,
    npi: 12345,
  },
  {
    first_name: 'Jane',
    last_name: 'Doe',
    zip: 93110,
    npi: 23456,
  },
  {
    first_name: 'Bran',
    last_name: 'Doe',
    zip: 93110,
    npi: 54321,
  },
  {
    first_name: 'Jack',
    last_name: 'Dob',
    zip: 94101,
    npi: 35467,
  },
  {
    first_name: 'John',
    last_name: 'Doe',
    zip: 54312,
    npi: 99999,
  },
  {
    first_name: 'Jack',
    last_name: 'Dob',
    zip: 11002,
    npi: 23556,
  },
  {
    organization_name: 'Johns Hopkins',
    zip: '01234',
    npi: 22222,
  },
  {
    organization_name: 'Mercy Hospital',
    zip: '93110',
    npi: 33333,
  },
  {
    organization_name: 'General Hospital',
    zip: '11002',
    npi: 44533,
  },
];

const selectOptions = options.map((o) => {
  const val = (o.organization_name) ? o.organization_name : `${o.first_name} ${o.last_name}`;
  return {
    value: val,
    label: val,
  };
});

export default class Search extends React.Component {
  onChange(val) {
    console.log(val);
  }
  render() {
    return (
      <Select
        name="organization_name" className="search-box"
        options={selectOptions}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}
