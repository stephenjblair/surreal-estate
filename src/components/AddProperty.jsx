import React, { Component } from 'react';
import '../add-property.css';

class AddProperty extends Component {
  state = {
    fields: {
      type: 'Flat',
      city: 'Manchester',
      title: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="add-property-container">
        <div className="AddProperty">
          <h3>Add your property details here... </h3>
          <form onSubmit={this.handleAddProperty} className="add-property-form">
            <div className="add-property-description">
              <legend>Description</legend>
              <input
                name="title"
                value={this.state.fields.title}
                onChange={this.handleFieldChange}
                placeholder="Add property description"
              />
            </div>
            <div className="property-dropdown">
              <legend>Property Type</legend>
              <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="EndOfTerrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
            <div className="city-dropdown">
              <legend>City</legend>
              <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Sheffield">Sheffield</option>
              </select>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProperty;
