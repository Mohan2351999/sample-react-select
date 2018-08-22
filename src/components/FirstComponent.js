import React, { Component } from 'react';
import Select from 'react-select';
import "./FirstComponent.css"



const options = [
  { value: 'banglore', label: 'Banglore' },
  { value: 'chennai', label: 'Chennai' },
    { value: 'Delhi', label: 'Delhi' },
  { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'kolkata', label: 'Kolkata' },
  { value: 'mumbai', label: 'Mumbai' },
    { value: 'ahemadabad', label: 'Ahemadabad' },
  { value: 'amritsar', label: 'Amritsar' },
    { value: 'aragonda', label: 'Aragonda' },
  { value: 'Aurangabad', label: 'Aurangabad' },
    { value: 'bhilai', label: 'Bhilai' },
  { value: 'bhuwaneswar', label: 'Bhuwaneswar' },
    { value: 'bilaspur', label: 'Bhilaspur' },
  { value: 'chandigarh', label: 'Chandigarh' },
    { value: 'coimbatore', label: 'Coimabatore' },
  { value: 'dehradun', label: 'Deharadun' },
  { value: 'faridabad', label: 'Faridabad' },
    { value: 'gandhinagar', label: 'Gandhi Nagar' },
  { value: 'gazibad', label: 'Ghazibad' },
    { value: 'gorakpur', label: 'Gorakpur' },
  { value: 'gawhati', label: 'Gawhati' },
    { value: 'gwalior', label: 'Gwalior' },
  { value: 'indore', label: 'Indore' },
    { value: 'jaipur', label: 'Jaipur' },
  { value: 'kakinada', label: 'Kakinada' },
    { value: 'karaikudi', label: 'Karaikudi' },
  { value: 'karimnagar', label: 'Karim Nagar' },
    { value: 'karur', label: 'Karur' },
  { value: 'lucknow', label: 'Lucknow' },
    { value: 'madurai', label: 'Madurai' },
  { value: 'mysore', label: 'Mysore' },
    { value: 'nasik', label: 'Nasik' },
  { value: 'nellore', label: 'Nellore' },
    { value: 'noida', label: 'Noida' },
  { value: 'pune', label: 'Pune' },
    { value: 'raipur', label: 'Raipur' },
  { value: 'sodepur', label: 'Sodepur' },
    { value: 'surat', label: 'Surat' },
  { value: 'thane', label: 'Thane' },
    { value: 'tirupathi', label: 'Tirupathi' },
  { value: 'trichy', label: 'Trichy' },
    { value: 'trivendram', label: 'Trivendram' },
  { value: 'vododara', label: 'Vododara' },
    { value: 'visakapatnam', label: 'Visakapatnam' },
  { value: 'warangal', label: 'Warangal' },
];

class FirstComponent extends React.Component {
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

        <div>

      <Select
          className="changeheight"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
          placeholder="Choose the city"

      />

        </div>
    );
  }
}

export default FirstComponent;