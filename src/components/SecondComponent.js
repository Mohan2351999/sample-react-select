import React from 'react';
import Select from 'react-select';
import "./FirstComponent.css"


const options = [
  { value: 'yrk', label: 'Dr.Yarram Rama Krishna Reddy' },
    { value: 'steve', label: 'Dr.Steve Harvey' },
  { value: 'john', label: 'Dr.John dean' }
];

class SecondComponent extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
          className="changeheight1"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Enter primary specality/Doctor Name "
      />
    );
  }
}

export default SecondComponent;